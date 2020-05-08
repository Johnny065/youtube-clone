import './VideoItem.css';
import React from 'react';

function VideoItem({ video, onVideoSelect }) {
  return (
    <div onClick={() => onVideoSelect(video)} className="item video-item">
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
        className="ui image"
      />
      <div className="content">
        <div style={{ color: 'white' }} className="header">
          {video.snippet.title}
        </div>
      </div>
    </div>
  );
}

export default VideoItem;
