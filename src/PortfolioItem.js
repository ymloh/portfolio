import React from 'react'
import ItemMedia from './ItemMedia'
import './PortfolioItem.css'

const videoFileExts = ['mp4', 'm4v', 'webm'];

function PortfolioItem(props) {

  let mediaExt = props.mediaSource && props.mediaSource.split('.');
  mediaExt = mediaExt && mediaExt[mediaExt.length - 1].toLowerCase();

  const isVideo = videoFileExts.includes(mediaExt);

  return (
    <div className='item'>
      <span className='item-title'>{props.title}</span>
      <div className='item-thumb'>
        <ItemMedia isVideo={isVideo} source={props.mediaSource} />
      </div>
      <div className='item-links'>

      </div>
      <div className='item-desc'>
        {props.desc}
      </div>
    </div>
  )
}

export default PortfolioItem
