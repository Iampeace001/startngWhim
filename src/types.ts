export interface Game {
  slug: string;
  title: string;
  url: string;
  by: string;
  cover: string | null;
  description: string;
  plays?: number;
}

