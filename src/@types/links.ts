export interface Link {
  id: string;
  title: string;
  url: string;
  description: string;
  cover: Cover | null;
  autoExpireAt: string | null; //yyyy-mm-dd
}

export interface Cover {
  url: string;
}
