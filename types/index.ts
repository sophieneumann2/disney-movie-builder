export type AirtableRecordType = {
  id: string;
  fields: Movie;
};

export type DisneyCharacter = {
  _id: string;
  name: string;
  imageUrl: string;
  films: any[];
};

export type Movie = {
  _id: string;
  name: string;
  enemies: string;
  heroes: string;
  liked: boolean;
  recordId: string;
};
