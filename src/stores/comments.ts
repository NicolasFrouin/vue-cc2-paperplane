import { z } from 'zod';
import useCommonStore, { RouteType } from './common';

const CommentSchema = z.object({
  postId: z.number(),
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  body: z.string(),
});

function useCommentsStore() {
  return useCommonStore(RouteType.COMMENTS, CommentSchema);
}

export default useCommentsStore;
