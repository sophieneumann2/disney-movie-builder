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
  try {
    const updatedData = table.update(data);
    return getMinifiedResponse([updatedData]);
  } catch (error) {
    console.error('Error updating data:', error);
  }
};

export const createMovie = async (data: NewMovie) => {
  try {
    const response = table.create([{ fields: { ...data } }]);
    return getMinifiedResponse([response]);
  } catch (error) {
    console.error(error);
  }
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
  try {
    const response = table.destroy([recordId]);
    return response;
  } catch (error) {
    console.error(error);
  }

  return;
};
