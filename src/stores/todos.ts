import { z } from 'zod';
import useCommonStore from './common';

const TodoSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  completed: z.boolean(),
});

function useTodosStore(id: number | undefined = undefined) {
  return useCommonStore('todos', TodoSchema, id);
}

export default useTodosStore;
