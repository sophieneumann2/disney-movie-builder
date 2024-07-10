import { AirtableRecordType, NewMovie } from '@/types';

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

export const updateMovie = async (data: any[]) => {
  table.update(data, function (err: any, records: AirtableRecordType) {
    if (err) {
      console.error(err);
      return;
    }
    return getMinifiedResponse([records]);
  });
};

export const createMovie = async (data: NewMovie) => {
  table.create(
    [{ fields: { ...data } }],
    function (err: any, records: AirtableRecordType) {
      if (err) {
        console.error(err);
        return;
      }
      return getMinifiedResponse([records]);
    },
  );
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

export const deleteMovie = async (recordId: string) => {
  table.destroy([recordId], function (err: any, deletedRecords: any) {
    if (err) {
      console.error(err);
    }
    console.log('Deleted', deletedRecords.length, 'records');
  });
  return;
};
