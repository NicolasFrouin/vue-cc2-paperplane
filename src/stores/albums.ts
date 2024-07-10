import { z } from 'zod';
import useCommonStore, { RouteType } from './common';

const AlbumSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
});

function useAlbumsStore() {
  return useCommonStore(RouteType.ALBUMS, AlbumSchema);
}

export default useAlbumsStore;
