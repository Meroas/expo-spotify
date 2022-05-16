import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TrackMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AlbumMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Track {
  readonly id: string;
  readonly title?: string | null;
  readonly seconds?: number | null;
  readonly albumID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Track, TrackMetaData>);
  static copyOf(source: Track, mutator: (draft: MutableModel<Track, TrackMetaData>) => MutableModel<Track, TrackMetaData> | void): Track;
}

export declare class Album {
  readonly id: string;
  readonly artist: string;
  readonly backgroundColor?: string | null;
  readonly image?: string | null;
  readonly released?: number | null;
  readonly title: string;
  readonly Tracks?: (Track | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Album, AlbumMetaData>);
  static copyOf(source: Album, mutator: (draft: MutableModel<Album, AlbumMetaData>) => MutableModel<Album, AlbumMetaData> | void): Album;
}