import { DisneyCharacter } from '@/types';

const minifyResponse = (response: DisneyCharacter[]) => {
  const characters = response.length
    ? response.map((character: DisneyCharacter) => {
        return {
          _id: character._id,
          name: character.name,
          films: character.films,
          imageUrl: character.imageUrl,
        };
      })
    : [];
  return characters;
};

export const getAllDisneyCharacters = async () => {
  try {
    const DISNEY_API_ROUTE = 'https://api.disneyapi.dev/character?pageSize=20'; // only returns first 50 characters for now
    const response = await fetch(DISNEY_API_ROUTE);
    const characters = await response.json();
    return minifyResponse(characters.data);
  } catch (error) {
    console.error('error while fetching disney character data: ', error);
    return [];
  }
};
