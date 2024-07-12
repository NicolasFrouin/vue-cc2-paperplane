import { z } from 'zod';
import useCommonStore from './common';

const CommentSchema = z.object({
  postId: z.number(),
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  body: z.string(),
});

function useCommentsStore(id: number | undefined = undefined) {
  return useCommonStore('comments', CommentSchema, id);
}

export default useCommentsStore;
