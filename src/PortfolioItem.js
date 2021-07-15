import React, { useState, useEffect } from 'react'
import ItemMedia from './ItemMedia'
import './PortfolioItem.css'

const videoFileExts = ['mp4', 'm4v', 'webm'];

function PortfolioItem(props) {

  let mediaExt = props.mediaSource && props.mediaSource.split('.');
  mediaExt = mediaExt && mediaExt[mediaExt.length - 1].toLowerCase();
  const isVideo = videoFileExts.includes(mediaExt);

  const [isActive, setActive] = useState(false);

  // useEffect(() => console.log(`isActive: ${isActive}`), [isActive]);


  return (
    <div className={`item ${isActive && 'active'}`} onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <span className={`item-title ${isActive && 'active'}`}>{props.title}</span>
      <div className='item-thumb'>
        <ItemMedia isVideo={isVideo} source={props.mediaSource} ext={mediaExt} isActive={isActive} />
      </div>
      <div className='item-links'>
        <a className={`${isActive && 'active'}`} href={props.pagelink} target='_blank' rel='noreferrer'>
          <div>View Page</div>
        </a>
        <a className={`${isActive && 'active'}`} href={props.repolink} target='_blank' rel='noreferrer'>
          <div>View Repo</div>
        </a>
      </div>
      <div className='item-desc'>
        {props.desc}
      </div>
    </div>
  )
}

export default PortfolioItem
