import type { RoutesType } from '@/router';
import { ref } from 'vue';
import { z } from 'zod';

function useCommonStore(route: RoutesType, objectSchema: z.ZodObject<any>, id: number | undefined = undefined) {
  type ResObject = z.infer<typeof objectSchema> extends object ? { id: number; [key: string]: any } : never;

  const loading = ref(true);
  const error = ref<Error | null>(null);
  const data = ref<ResObject[] | null>(null);
  const abortController = new AbortController();
  const canceled = ref(false);

  fetch(`https://jsonplaceholder.typicode.com/${route}/${id ?? ''}`, { signal: abortController.signal })
    .then(
      (res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      },
      (err) => {
        throw err instanceof Error ? err : new Error(err);
      },
    )
    .then((res) => {
      let valid = false;
      if (Array.isArray(res)) {
        valid = res.every((item) => objectSchema.safeParse(item).success);
      } else {
        valid = objectSchema.safeParse(res).success;
      }
      if (!valid) {
        throw new Error('Invalid data');
      }
      data.value = res;
    })
    .catch((err) => (error.value = err))
    .finally(() => (loading.value = false));

  return {
    error,
    data,
    loading,
    cancel: () => (canceled.value = true) && abortController.abort(),
    canceled,
  };
}

export default useCommonStore;
