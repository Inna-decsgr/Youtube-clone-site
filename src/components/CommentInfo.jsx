import { formatAgo } from '../util/date';
import { HiOutlineHandThumbUp, HiOutlineHandThumbDown  } from "react-icons/hi2";

export default function CommentInfo({comment}) {
  const {authorDisplayName, textDisplay, likeCount, publishedAt} = comment;
  let he = require('he');

  return (
    <>
      <li className='mb-8'>
        <div className='flex'>
          <img className='w-12 h-12 rounded-full' src="https://yt3.googleusercontent.com/ytc/APkrFKZoluYL3JSYRvqPLH5sMIcCtaCYHZWL9Yk3aaPMjxKW_Q=s100-c-k-c0x00ffffff-no-rj" alt="profile" />
          <div className='ml-6'>
            <div className='flex'>
              <p className='font-bold'>{`@${authorDisplayName}`}</p>
              <p className='ml-2 opacity-80'>{formatAgo(publishedAt, 'ko')}</p>
            </div>
            <p>{he.decode(textDisplay)}</p>
          </div>
        </div>
        <p className='count flex mx-[4.5rem] my-1 text-lg items-center'>
          <HiOutlineHandThumbUp className='good text-xl mr-2'/> 
          {likeCount} 
          <HiOutlineHandThumbDown className='hate text-xl ml-5'/>
        </p>
      </li>
    </>
  );
}

