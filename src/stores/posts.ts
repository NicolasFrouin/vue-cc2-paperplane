import { z } from 'zod';
import useCommonStore, { RouteType } from './common';

const PostSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  body: z.string(),
});

function usePostsStore() {
  return useCommonStore(RouteType.POSTS, PostSchema);
}

export default usePostsStore;
