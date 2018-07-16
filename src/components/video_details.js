import React from 'react';
import {ResponsiveEmbed} from 'react-bootstrap/lib';

const VideoDetails = ({videoList}) => {
  if(!videoList.length) {
    return <div>Loading ...</div>
  }

  let firstVideoId = videoList[0].id.videoId;
  let videoEmbed = `https://www.youtube.com/embed/${firstVideoId}`;

  return (
    <div>
      <ResponsiveEmbed a16by9>
        <iframe width="560" src={videoEmbed} allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </ResponsiveEmbed>
    </div>
  );
}

export default VideoDetails;
