import { z } from 'zod';
import useCommonStore, { RouteType } from './common';

const TodoSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  completed: z.boolean(),
});

function useTodosStore() {
  return useCommonStore(RouteType.TODOS, TodoSchema);
}

export default useTodosStore;
