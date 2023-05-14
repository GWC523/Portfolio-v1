import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

/* CSS */
import './AwardCard.scss';

interface AwardCardProps {
  image: any,
  header: string,
  subheader: string,
  content: string,
  seeMoreLink: string,
  redirectLink: string,
}

function AwardCard({image, header, subheader, content, seeMoreLink, redirectLink} : AwardCardProps) {
  let navigate = useNavigate();

  return (
     <div className='award-card'>
        <img src={image} className='image' onClick={redirectLink != '' ? () =>  window.open(redirectLink, '_blank', 'noreferrer') : () => navigate(seeMoreLink)}/>
            <div className='content'>
            <p className='header'>{header}</p>
            <p className='subheader'>{subheader}</p>
            <p className='body'>
                {content}
            </p>
            <p className='see-more' onClick={() => navigate(seeMoreLink)}>See More</p>
            </div>
        </div>      
  )
}

export default AwardCard