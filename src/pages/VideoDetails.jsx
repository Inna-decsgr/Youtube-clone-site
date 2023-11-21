import React from 'react';
import {useLocation} from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
import RelatedVideos from '../components/RelatedVideos';
import Comments from '../components/Comments';

export default function VideoDetails() {
  const {state:{video}} = useLocation();
  const {title, channelId, channelTitle, description} = video.snippet;
  const {id} = video
  let he = require('he')

  return (
    <section className='flex flex-col lg:flex-row'>
      <article className='basis-4/6'>
        <iframe 
          className='rounded-lg overflow-hidden'
          id="player" 
          type="text/html" 
          width="100%" height="640"
          title={title}
          src={`https://www.youtube.com/embed/${video.id}`}
        />
        <div className='p-8'>
          <h2 className='text-xl font-bold'>{he.decode(title)}</h2>
          <div className='flex items-center'>
            <ChannelInfo id={channelId} name={channelTitle}/>
            <button className='subscribe ml-10 mb-4 w-20 h-10 rounded-full font-bold'>구독</button>
          </div>
          <pre className='pre whitespace-pre-wrap rounded-xl p-5'>{description}</pre>
        </div>
        <section>
          <Comments id={id}/>
        </section>
      </article>
      <section className='basis-2/6'>
        <RelatedVideos id={channelId}/>
      </section>
    </section>
  );
}

