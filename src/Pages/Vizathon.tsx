import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import ContactList from '../Components/ContactList/ContactList'

/* CSS */
import './Vizathon.scss'

/* Images */
import VizathonImg from '../Assets/Images/Awards/vizathon.png';

function Vizathon() {
  return (
    <div className='background-2'>
    <Navbar path='/aboutMe' backPath='/aboutMe'/>
    <ContactList/>
    <div className='page'>
        <h1 className='vizathon-title'>Vizathon 2021</h1>
        <div className='row vizathon-content'>
            <img src={VizathonImg} className='vizathon-img' alt='site image'/>
            <div className='content-card'>
                <h3 className='card-title'>Inspiration</h3>
                <p className='card-content'>
                    We were motivated by the dedication of medical professionals and researchers who tirelessly combat the pandemic. In addition to them, we have been impressed by the effectiveness of informative visualizations, such as the one shown here. With our inspirations in mind, we have also developed our own visualizations that convey information in an attractive and easily understandable way for the wider public.
                </p>
            </div>
        </div>
        
    </div>
    </div>
  )
}

export default Vizathon