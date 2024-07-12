import { z } from 'zod';
import useCommonStore from './common';

const PostSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  body: z.string(),
});

function usePostsStore(id: number | undefined = undefined) {
  return useCommonStore('posts', PostSchema, id);
}

export default usePostsStore;
