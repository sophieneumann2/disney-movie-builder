'use client';

import { likeMovieAction } from '@/actions/like-movie';
import Image from 'next/image';
import { useFormState } from 'react-dom';

interface ILikeProps {
  liked: boolean;
  id: string;
}

export default function Like({ liked, id }: ILikeProps) {
  const initialState = {
    id,
    liked: !!liked,
  };
  const [state, dispatch] = useFormState(likeMovieAction, initialState);
  return (
    <form
      className="flex flex-row items-center justify-start gap-4"
      action={dispatch}
    >
      <input type="hidden" name="id" value={id} />
      <button type="submit">
        <Image
          src={
            state.liked
              ? '/static/icons/heart-filled.svg'
              : '/static/icons/heart-outlined.svg'
          }
          alt={state.liked ? 'Heart filled' : 'Heart outlined'}
          width={30}
          height={30}
          className="hover:scale-110"
        />
      </button>

      {state.liked ? 'Liked' : 'Not yet liked'}
    </form>
  );
}
