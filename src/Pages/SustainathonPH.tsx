import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import ContactList from '../Components/ContactList/ContactList';
import { Animate } from '../Components/Animations/AnimationLibrary';

/* CSS */
import './SustainathonPH.scss'

/* Images */
import KopihanImg from '../Assets/Images/Awards/Kopihan.png'
import SustainathonPHImg from '../Assets/Images/Awards/awardSustainathonPH.png'
import Footer from '../Components/Footer/Footer';





function SustainathonPH() {
  return (
    <>
        <Navbar path='/aboutMe' backPath='/aboutMe'/>
        <ContactList/>
        <div className='page'>
            <h1 className='sustainathon-title'>TCS Sustainathon PH 2021</h1>
                <div className='row sustainathon-content'>
                    <img src={KopihanImg} className='sustainathon-img' alt='site image'/>
                    <Animate.FadeUp>
                    <div className='content-card-1'>
                        <h3 className='card-title'>About Kopihan</h3>
                        <p className='card-content'>
                            Due to the pandemic, students worldwide have resorted to a new learning strategy by making small group chats with their classmates for peer-to-peer teaching. As a result, it emphasized two inherent learning strategies: personalized learning and social learning. Thus, Kopi-han is designed to empower these inherent learning styles. Kopi-han’s solution is simple: creating a personalized virtual learning environment to aid them in their learning with all the necessary studying and teaching tools in one app. Unlike other traditional educational apps, Kopi-han focuses on aiding students in studying by letting them have more control over their learning setup. Learners can create their study rooms, book a study session, create their own learning community, share learning strategies and materials, and earn rewards—to help create their goals, monitor their learning progress, and make learning a rewarding experience.
                        </p>
                    </div>
                    </Animate.FadeUp>
                </div>
                <div className='row mt-5'>
                    <div className='col-lg-5'>
                        <Animate.FadeUp>
                        <div className='content-card-4'>
                            <h3 className='card-title'>Winning 1st-runner up and becoming a finalist for the ASEAN Sustainathon!</h3>
                        </div>
                        </Animate.FadeUp>
                    </div>
                    <div className='col-lg-7'>
                        <img src={SustainathonPHImg} className='sustainathon-ph-img' alt='award'/>
                    </div>
                </div>
                <Animate.FadeUp>
                    <div className='content-card-5'>
                        <h3 className='card-title'>Journey </h3>
                        <p className='card-content mt-3'>
                            My aunt knew that I was interested in tech so she recommended me to join this competition. I never had high hopes to win the competition, but I decided to join anyway in the hopes that it would be a great learning experience and an opportunity to think of solutions that could help the community. And so I invited some friends who I knew were interested to join a ideation and eventually formed a group of novice tech enthusiasts from different universities that were brimming with eagerness to learn in this journey. Despite the busy schedules, I made sure to arrange and schedule weekly meetings with the team. I also introduced them to Kanban boards to facilitate agile project management. 
                        </p>
                        <p className='card-content'>
                            It was important for me that all inputs are heard despite the difficulty in communication due to the distance caused by the pandemic. Thus, I would set up brainstorming sessions with the team to think of solutions and assigned roles and tasks that they could work on within their free time. 
                        </p>
                        <p className='card-content'>
                            With hard work and determination, we were able to ideate, Kopihan, a peer-learning platform as an answer for our challenge statement. 
                        </p>
                        <p className='card-content'>
                            Amongst a hundred of submissions, we were able to be part of the top teams who can present their solution in an online event. Eventually, we won 1st-runner up and became Philippine representatives for the ASEAN Sustainathon that was held in Singapore
                        </p>
                    </div>
                </Animate.FadeUp>
                <Animate.FadeUp>
                    <div className='mt-2'>
                    <Footer mode="light-mode"/>
                    </div>
                </Animate.FadeUp>

        </div>
    </>
  )
}

export default SustainathonPH