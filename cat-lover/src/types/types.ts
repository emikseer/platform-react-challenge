export type Cat = {
  id: string;
  breeds: [];
  url: string;
  width: number;
  height: number;
};

export type Breed = { name: string; id: string; [key: string]: any };
