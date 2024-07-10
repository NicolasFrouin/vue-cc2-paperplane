import { ref } from 'vue';
import { z } from 'zod';

const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  username: z.string(),
  email: z.string().email(),
  address: z.object({
    street: z.string(),
    suite: z.string(),
    city: z.string(),
    zipcode: z.string(),
    geo: z.object({
      lat: z.string(),
      lng: z.string(),
    }),
  }),
  phone: z.string(),
  website: z.string(),
  company: z.object({
    name: z.string(),
    catchPhrase: z.string(),
    bs: z.string(),
  }),
});

type User = z.infer<typeof UserSchema>;

function validUsers(users: User[]) {
  return users.every((user) => UserSchema.safeParse(user).success);
}

function fetchUsers() {
  const loading = ref(true);
  const error = ref<Error | null>(null);
  const data = ref<User[] | null>(null);
  const abortController = new AbortController();
  const canceled = ref(false);

  fetch('https://jsonplaceholder.typicode.com/users', { signal: abortController.signal })
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
      if (!Array.isArray(res) || !validUsers(res)) {
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

export default fetchUsers;
