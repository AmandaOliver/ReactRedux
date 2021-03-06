import React from 'react';

const VideoListItem = ({video}) => {
    const imageURL = video.snippet.thumbnails.default.url;
    return (
        <li className = 'list-group-item video-item' >
            <div className='video-list media'>
                <div className='media-left'>
                    <img src={imageURL} className='media-object' />
                </div>
                <div className='media-body'>
                    <div className='media-heading'>{video.snippet.title}</div>
                </div>
            </div>
          
        </li>
    );
};

export default VideoListItem;