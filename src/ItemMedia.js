import React, { useEffect, useRef } from 'react'

const videoFileExts = ['mp4', 'm4v', 'webm'];

function ItemMedia(props) {
  let media;

  let mediaExt = props.source && props.source.split('.');
  mediaExt = mediaExt && mediaExt[mediaExt.length - 1].toLowerCase();
  const isVideo = videoFileExts.includes(mediaExt);

  const mediaRef = useRef();

  const reposition = () => {
    const targetTop = (window.innerHeight - mediaRef.current.getBoundingClientRect().height) / 2;
    mediaRef.current.style.top = `${targetTop}px`;
    console.table(mediaRef.current.getBoundingClientRect());
  }

  if (isVideo) {
    media = (
      <video
        className={`item-media ${[(props.isActive || props.isModal) && 'active', props.isModal && 'front-and-center'].join(' ')}`}
        autoPlay={true}
        loop={true}
        playsInline={true}
        muted={true}
        onClick={props.onClick}
        ref={mediaRef}
        onLoadedData={reposition}
      >
        <source src={props.source} type={`video/${props.ext || 'webm'}`} />
      </video>
    );
  }
  else {
    media = (
      <img
        className={`item-media ${[(props.isActive || props.isModal) && 'active', props.isModal && 'front-and-center'].join(' ')}`}
        src={props.source}
        alt='Project thumbnail'
        onClick={props.onClick}
        ref={mediaRef}
        onLoad={reposition}
      />
    );
  }

  return media;
}

export default ItemMedia
