'use client';

import { createMovieAction } from '@/actions/create-movie';
import { getAllDisneyCharacters } from '@/lib/disney-characters';
import { useEffect, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

function CreateMovieButton() {
  const { pending } = useFormStatus();
  return (
    <button
      className="primary-link"
      type="submit"
      disabled={pending}
      aria-disabled={pending}
    >
      {pending ? '...' : 'Create'}
    </button>
  );
}

export default function CreateMovieForm() {
  const initialState = {
    name: '',
    heroes: '',
    enemies: '',
    liked: false,
    _id: '',
  };
  const [, dispatch] = useFormState(createMovieAction, initialState);
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
      <input
        className="block my-4 w-100 outline outline-orange-300 p-2 rounded-md"
        name="name"
        type="text"
        placeholder="Enter movie title"
        required
      />
      <div>
        <p>Heroes:</p>
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
                  >
                    {character.name}
                  </option>
                ))}
              </>
            ) : null}
          </select>
        </div>
      </div>
      <div>
        <p>Heroes:</p>
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
                  >
                    {character.name}
                  </option>
                ))}
              </>
            ) : null}
          </select>
        </div>
      </div>
      <CreateMovieButton />
    </form>
  );
}
