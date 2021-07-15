import React, { useState } from 'react'
import ItemMedia from './ItemMedia'
import './PortfolioItem.css'

function PortfolioItem(props) {

  const [isActive, setActive] = useState(false);

  // useEffect(() => console.log(`isActive: ${isActive}`), [isActive]);

  const mouseEnterHandler = e => {
    setActive(true);
  }

  const mouseExitHandler = e => {
    setActive(false);
  }

  const mediaClickHandler = e => {
    props.toggleModal(props.projId);
  }

  return (
    <div className={`item ${isActive && 'active'}`} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseExitHandler}>
      <span className={`item-title ${isActive && 'active'}`}>{props.title}</span>
      <div className='item-thumb'>
        <ItemMedia source={props.mediaSource} isActive={isActive} onClick={mediaClickHandler} />
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
