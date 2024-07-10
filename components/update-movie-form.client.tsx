'use client';

import { updateMovieAction } from '@/actions/update-movie';
import { getAllDisneyCharacters } from '@/lib/disney-characters';
import { Movie } from '@/types';
import { useEffect, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

function UpdateMovieButton() {
  const { pending } = useFormStatus();
  return (
    <button
      className="primary-link"
      type="submit"
      disabled={pending}
      aria-disabled={pending}
    >
      {pending ? '...' : 'Update'}
    </button>
  );
}

export default function UpdateMovieForm({ movie }: { movie: Movie }) {
  const initialState = {
    name: movie.name,
    heroes: movie.heroes,
    enemies: movie.enemies,
    liked: movie.liked,
    _id: movie._id,
    recordId: movie.recordId,
  };
  const [state, dispatch] = useFormState(updateMovieAction, initialState);
  const [characters, setCharacters] = useState<any>([]);

  const handleCharacters = async () => {
    const characters = await getAllDisneyCharacters();
    setCharacters(characters);
  };

  useEffect(() => {
    handleCharacters();
  }, []);

  return (
    <form action={dispatch}>
      <input name="_id" type="hidden" value={state._id} />

      <input name="recordId" type="hidden" value={state.recordId} />
      <input
        className="block my-4 w-100 outline outline-orange-300 p-2 rounded-md"
        name="name"
        type="text"
        placeholder="Enter movie title"
        defaultValue={state.name}
        required
      />
      <div>
        <label htmlFor="heroes" className="block">
          Choose Heroes:
        </label>
        <select
          name="heroes"
          id="heroes"
          multiple
          className="min-h-48"
          required
        >
          {characters.length ? (
            <>
              {characters.map((character: any, index: number) => (
                <option
                  key={character._id}
                  value={character.name}
                  className="py-2 aria-selected:bg-slate-300"
                  selected={Boolean(
                    state.heroes
                      .split(',')
                      .find((item) => item === character.name),
                  )}
                >
                  {character.name}
                </option>
              ))}
            </>
          ) : null}
        </select>
      </div>
      <div>
        <label htmlFor="enemies" className="block">
          Choose Enemies:
        </label>
        <select
          name="enemies"
          id="enemies"
          multiple
          className="min-h-48"
          required
        >
          {characters.length ? (
            <>
              {characters.map((character: any, index: number) => (
                <option
                  key={character._id}
                  value={character.name}
                  className="py-2 aria-selected:bg-slate-300"
                  selected={Boolean(
                    state.enemies
                      .split(',')
                      .find((item) => item === character.name),
                  )}
                >
                  {character.name}
                </option>
              ))}
            </>
          ) : null}
        </select>
      </div>
      <UpdateMovieButton />
    </form>
  );
}
