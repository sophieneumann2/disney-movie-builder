import { AirtableRecordType } from '@/types';

const Airtable = require('airtable');
const base = new Airtable({
  apiKey: process.env.AIRTABLE_TOKEN,
}).base('appfnlo9ZboD5PtOa');
const table = base('movies');

const getMinifiedResponse = (movies: AirtableRecordType[]) => {
  return movies.map((movie) => {
    return { ...movie.fields, recordId: movie.id };
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

export const getMovie = async (id: string) => {
  const movies = await table
    .select({
      filterByFormula: `_id=${id}`,
    })
    .firstPage();
  return getMinifiedResponse(movies)[0];
};

export const updateMovie = async (data: AirtableRecordType[]) => {
  table.update(data, function (err: any, records: AirtableRecordType) {
    if (err) {
      console.error(err);
      return;
    }
    return records;
  });
};

export const changeLikeStatusMovie = async (id: string) => {
  try {
    if (id) {
      const movie = await getMovie(id);

      if (movie) {
        const updatedLike = !movie.liked;

        const updatedRecords = await table.update([
          {
            id: movie.recordId,
            fields: { liked: updatedLike },
          },
        ]);
        return getMinifiedResponse(updatedRecords);
      } else {
        console.error('coffee store does not exist');
      }
    } else {
      console.error('Store id is missing');
    }
  } catch (error) {
    console.error('error updating a store');
  }
};
