import {useQuery} from '@tanstack/react-query'
import { useYoutubeApi } from '../context/YoutubeApiContext';
import CommentInfo from './CommentInfo';

export default function Comments({id}) {
  const {youtube} = useYoutubeApi();
  const {isLoading, error, data:comments} 
  = useQuery({queryKey:['comments', id], queryFn:async() => {
    return youtube.relatedComments(id)
  }})

  return (
    <div>
      {isLoading && <p className='font-bold text-4xl'>Loading....</p>}
      {error && <p className='font-bold text-4xl'>Something is wrong....</p>}
      {comments && <span className='p-8 text-2xl font-bold'>댓글{comments.length}개</span>}
      {comments && <ul className='p-8'>
        {
          comments.map((comment) => <CommentInfo comment={comment}/>)
        }
      </ul>
      }
    </div>
  );
}

