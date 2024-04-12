export type Details = {
  h: number;
  w: number;
  c: string;
};
export type sorted = {
  Recents: Boolean;
  Recentlyadded: Boolean;
  Alphabetical: Boolean;
  Creator: Boolean;
};
export type CustomUser = {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
  accessToken?: string | null | undefined; // Add accessToken here
};
export type user = {
  name: string;
  email: string;
  playlist: [];
  likedsong: Track[];
};
interface Artist {
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface Album {
  available_markets: string[];
  type: string;
  album_type: string;
  href: string;
  id: string;
  images: {
    url: string;
    width: number;
    height: number;
  }[];
  name: string;
  release_date: string;
  release_date_precision: string;
  uri: string;
  artists: Artist[];
  external_urls: {
    spotify: string;
  };
  total_tracks: number;
}

interface ExternalIds {
  isrc: string;
}

interface ExternalUrls {
  spotify: string;
}

export interface Track {
  available_markets: string[];
  explicit: boolean;
  type: string;
  episode: boolean;
  track: boolean;
  album: Album;
  artists: Artist[];
  disc_number: number;
  track_number: number;
  duration_ms: number;
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  popularity: number;
  uri: string;
  is_local: boolean;
}
