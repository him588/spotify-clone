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
export type users=user[]