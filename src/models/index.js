// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Track, Album } = initSchema(schema);

export {
  Track,
  Album
};