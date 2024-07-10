'use client';

import { deleteMovieAction } from '@/actions/delete-movie';
import { useFormState, useFormStatus } from 'react-dom';

function DeleteButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="bg-red-700 hover:bg-red-500 rounded-md p-4 text-white"
      disabled={pending}
      aria-disabled={pending}
    >
      {pending ? '...' : 'Delete'}{' '}
    </button>
  );
}

export default function DeleteMovieButton({ recordId }: { recordId: string }) {
  const initialState = { recordId };
  const [, dispatch] = useFormState(deleteMovieAction, initialState);
  return (
    <form className="inline" action={dispatch}>
      <input type="hidden" name="recordId" value={recordId} />
      <DeleteButton />
    </form>
  );
}
