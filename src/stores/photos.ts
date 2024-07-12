import { z } from 'zod';
import useCommonStore from './common';

const PhotoSchema = z.object({
  albumId: z.number(),
  id: z.number(),
  title: z.string(),
  url: z.string().url(),
  thumbnailUrl: z.string().url(),
});

function usePhotosStore(id: number | undefined = undefined) {
  return useCommonStore('photos', PhotoSchema, id);
}

export default usePhotosStore;
