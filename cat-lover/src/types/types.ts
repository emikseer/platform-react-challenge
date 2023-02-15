export type Cat = {
  id: string;
  breeds?: [];
  url: string;
  width?: number;
  height?: number;
  image?: { id: string; url: string };
};

export type Breed = { name: string; id: string; [key: string]: any };
