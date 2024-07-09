import { AirtableRecordType } from '@/types';

const Airtable = require('airtable');
const base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN }).base(
  'appfnlo9ZboD5PtOa',
);
const table = base('movies');

const getMinifiedResponse = (movies: AirtableRecordType[]) => {
  return movies.map((movie) => {
    return { ...movie.fields };
  });
};

export const getAllMovies = async () => {
  const movies = await table
    .select({
      view: 'Grid view',
    })
    .firstPage();
  return getMinifiedResponse(movies);
};
