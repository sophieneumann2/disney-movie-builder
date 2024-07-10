'use client';

import { createMovieAction } from '@/actions/create-movie';
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
  return (
    <form action={dispatch}>
      <input
        className="block my-4 w-100 outline outline-orange-300 p-2 rounded-md"
        name="name"
        type="text"
        placeholder="Enter movie title"
        required
      />
      <input
        className="block my-4 w-100 outline outline-orange-300 p-2 rounded-md"
        name="heroes"
        type="text"
        placeholder="Enter Heroes"
        required
      />
      <input
        className="block my-4 w-100 outline outline-orange-300 p-2 rounded-md"
        name="enemies"
        type="text"
        placeholder="Enter Enemies"
        required
      />
      <CreateMovieButton />
    </form>
  );
}
