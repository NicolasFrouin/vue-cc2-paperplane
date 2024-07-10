import { ref } from 'vue';
import { z } from 'zod';

export enum RouteType {
  USERS = 'users',
  POSTS = 'posts',
  ALBUMS = 'albums',
  TODOS = 'todos',
  COMMENTS = 'comments',
  PHOTOS = 'photos',
}

function useCommonStore(route: RouteType, objectSchema: z.ZodObject<any>) {
  type ResObject = z.infer<typeof objectSchema>;

  const loading = ref(true);
  const error = ref<Error | null>(null);
  const data = ref<ResObject[] | null>(null);
  const abortController = new AbortController();
  const canceled = ref(false);

  fetch(`https://jsonplaceholder.typicode.com/${route}`, { signal: abortController.signal })
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
      if (!Array.isArray(res)) {
        throw new Error('Invalid data');
      }
      const valid = res.every((item) => objectSchema.safeParse(item).success);
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
