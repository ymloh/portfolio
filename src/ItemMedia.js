import React from 'react'

function ItemMedia(props) {
  let media;

  if (props.isVideo) {
    media = (
      <video className={`item-media ${[props.isActive ? 'active' : '']}`} autoPlay={true} loop={true} playsInline={true} muted={true}>
        <source src={props.source} type={`video/${props.ext}`} />
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
