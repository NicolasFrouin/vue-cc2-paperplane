import { z } from 'zod';
import useCommonStore, { RouteType } from './common';

const PhotoSchema = z.object({
  albumId: z.number(),
  id: z.number(),
  title: z.string(),
  url: z.string().url(),
  thumbnailUrl: z.string().url(),
});

function usePhotosStore() {
  return useCommonStore(RouteType.PHOTOS, PhotoSchema);
}

export default usePhotosStore;
