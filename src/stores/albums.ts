import { z } from 'zod';
import useCommonStore from './common';

const AlbumSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
});

function useAlbumsStore(id: number | undefined = undefined) {
  return useCommonStore('albums', AlbumSchema, id);
}

export default useAlbumsStore;
