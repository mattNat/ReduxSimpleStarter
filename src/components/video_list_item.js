import React from 'react';

// es6 syntax
// const VideoListItem = ({video}) => {
  const VideoListItem = (props) => {
    const video = props.video;
    const imageUrl = video.snippet.thumbnails.default.url;
    // console.log(video);

  return (
    // markup -> bootstrap classes (ref docs) to pretty up list
    <li className='list-group-item'>
      <div className='video-list media'>
        <div className='media-left'>
          <img className='media-object' src={imageUrl}/>
        </div>

        <div className='media-body'>
          <div className='media-heading'>{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;