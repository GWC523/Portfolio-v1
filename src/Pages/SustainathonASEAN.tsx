import React from 'react'
import ContactList from '../Components/ContactList/ContactList'
import Navbar from '../Components/Navbar/Navbar'

/* CSS */
import './SustainathonASEAN.scss'

/* Images */
import SustainathonASEANImg from '../Assets/Images/Awards/sustainathonASEAN.png'
import MeImg from '../Assets/Images/Awards/sustainathonMe.jpg';
import { Animate } from '../Components/Animations/AnimationLibrary'
import Footer from '../Components/Footer/Footer'

function SustainathonASEAN() {
  return (
    <>
     <Navbar path='/aboutMe' backPath='/aboutMe'/>
        <ContactList/>
        <div className='page'>
            <h1 className='sustainathon-title'>TCS Sustainathon ASEAN 2021</h1>
            <Animate.FadeUp>
            <div className='row sustainathon-content'>
                <img src={SustainathonASEANImg} className='asean-img' alt='award picture'/>
            </div>
            </Animate.FadeUp>
            <div className='row mt-5'>
                <div className='col-lg-6'>
                        <img src={MeImg} className='asean-me-img' alt='posing at the lab'/>
                </div>
                <div className='col-lg-6'>
                    <Animate.FadeUp>
                    <div className='content-card-6'>
                        <h3 className='card-title'>TCS Sustainathon ASEAN</h3>
                        <h5 className='card-subtitle'>1st Runner Up</h5>
                        <p className='card-content mt-3'>
                            Last August 2022, our team was given an exciting opportunity to present our innovative solution, Kopihan, to the heads of TCS at their Singapore headquarters. As a team that had experienced the challenges of distance learning firsthand, we created Kopihan to address these challenges and provide a solution that could benefit others.
                        </p>
                        <p className='card-content mt-3'>
                            While presenting to the judges was nerve-wracking, we remained focused and determined, and were able to showcase our app exactly as planned. It was a proud moment when we received second place in the competition, and it validated all the hard work we had put in to create Kopihan.
                        </p>
                        <p className='card-content mt-3'>
                            But learning didn't end there. We got the opportunity to engage with other finalists from ASEAN nations such as Singapore and Malaysia during the event. We had the opportunity to discuss ideas, share experiences, and learn from one another's accomplishments and shortcomings. 
                        </p>
                        <p className='card-content mt-3'>
                            The passion and ingenuity that went into each of the ideas presented was impressive. Following the presentation, we got the opportunity to show out product to other interested people from other IT businesses. Receiving comments and ideas from specialists in the sector was a wonderful experience, and we were able to make changes based on their suggestions.
                        </p>
                        <p className='card-content mt-3'>
                            Ultimately, this achievement was not only a source of confidence for our team, but it was also a fantastic learning experience. It educated us the worth of endurance, cooperation, and creativity, and demonstrated that with hard work and devotion, we can make a difference in the world.
                        </p>
                    </div>
                    </Animate.FadeUp>
                </div>
            </div>
            <Animate.FadeUp>
                <div className='mt-2'>
                    <Footer mode="light-mode"/>
                </div>
            </Animate.FadeUp>
        </div>
    </>
  )
}

export default SustainathonASEAN