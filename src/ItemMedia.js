import React from 'react'

const videoFileExts = ['mp4', 'm4v', 'webm'];

function ItemMedia(props) {
  let media;

  let mediaExt = props.source && props.source.split('.');
  mediaExt = mediaExt && mediaExt[mediaExt.length - 1].toLowerCase();
  const isVideo = videoFileExts.includes(mediaExt);


  if (isVideo) {
    media = (
      <video
        className={`item-media ${[(props.isActive || props.isModal) && 'active', props.isModal && 'front-and-center'].join(' ')}`}
        autoPlay={true}
        loop={true}
        playsInline={true}
        muted={true}
        onClick={props.onClick}
      >
        <source src={props.source} type={`video/${props.ext || 'webm'}`} />
      </video>
    );
  }
  else {
    media = (
      <img className='item-media' src={props.source} alt='Project thumbnail' />
    );
  }

  return media;
}

export default ItemMedia
