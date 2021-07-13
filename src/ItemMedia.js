import React from 'react'

function ItemMedia(props) {
  let media;

  if (props.isVideo) {
    media = (
      <video className='item-media' autoPlay={true} loop={true}>
        <source src={props.source} type='video/mp4' />
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
