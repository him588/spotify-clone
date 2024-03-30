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
export type  CustomUser= {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
  accessToken?: string | null | undefined; // Add accessToken here
}
export type user={
  name:string,
  email:string,
  playlist:[],
  likedsong:[]

}
interface Owner {
  display_name: string;
  external_urls: { [key: string]: string };
  href: string;
  id: string;
  type: string;
  // Add more properties if necessary
}

interface Image {
  height: number;
  url: string;
  width: number;
  // Add more properties if necessary
}

interface ExternalUrls {
  spotify: string;
  // Add more properties if necessary
}

interface Tracks {
  href: string;
  total: number;
  // Add more properties if necessary
}

export interface Playlist {
  collaborative: boolean;
  description: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: Owner;
  primary_color: string | null;
  public: boolean | null;
  snapshot_id: string;
  tracks: Tracks;
  type: string;
  uri: string;
}

export type users=user[]