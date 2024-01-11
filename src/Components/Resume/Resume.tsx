import React, {useState} from 'react'

/* Images */
import ResumeImg from '../../Assets/Images/Room/room_resume.svg';

/* CSS */
import './Resume.scss';

interface ResumeProps {
  isDay: Boolean,
}

function Resume({isDay} : ResumeProps) {

  let resume_file = 'https://drive.google.com/file/d/1e4J_LnKXLZyY3Px1wb-mPUQCTTiHWazG/view?usp=sharing';
                    
  return (
    <>
        <img 
            src={ResumeImg} alt='resume' 
            title='resume' 
            className={isDay ? 'resume' : 'resume night'}
            onClick={() => { window.open(resume_file, '_blank', 'noreferrer') }}
        />
    </>
  )
}

export default Resume