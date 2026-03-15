export interface Link {
  id: string;
  title: string;
  url: string;
  description: string;
  cover: Cover | null;
}

export interface Cover {
  url: string;
}
