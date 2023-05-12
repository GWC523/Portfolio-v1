import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import ContactList from '../Components/ContactList/ContactList'

/* CSS */
import './Vizathon.scss'

/* Images */
import VizathonImg from '../Assets/Images/Awards/vizathon.png';
import VaccImg from '../Assets/Images/Awards/vacc.png';
import Award from '../Assets/Images/Awards/award.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import Footer from '../Components/Footer/Footer';

function Vizathon() {
  return (
    <div className='background-2'>
    <Navbar path='/aboutMe' backPath='/aboutMe'/>
    <ContactList/>
    <div className='page'>
        <h1 className='vizathon-title'>Vizathon 2021</h1>
        <div className='row vizathon-content'>
            <img src={VizathonImg} className='vizathon-img' alt='site image'/>
            <div className='content-card-1'>
                <h3 className='card-title'>Inspiration</h3>
                <p className='card-content'>
                    We were motivated by the dedication of medical professionals and researchers who tirelessly combat the pandemic. In addition to them, we have been impressed by the effectiveness of informative visualizations, such as the one shown here. With our inspirations in mind, we have also developed our own visualizations that convey information in an attractive and easily understandable way for the wider public.
                </p>
            </div>
        </div>
        <div className='row'>
          <div className='col-lg-6 mt-5'>
            <div className='content-card-2'>
              <h3 className='card-title'>About the Project</h3>
              <p className='card-content'>
                The People vs. Covid-19 is our project that showcases various widgets, each with its own way of displaying Covid-19 data. The initial widget is a tracker that is refreshed with the latest figures on the total global cases, deaths, and recoveries. We also have several graphical representations, such as an interactive map and various charts that offer different perspectives on the data. Additionally, we have an interactive simulation that teaches how to slow the spread of the virus by getting vaccinated and practicing social distancing
              </p>
              <p className='card-content'>
                The project was built using css3, deck.gl, google-maps, html5, javascript, and tableau
              </p>
              <div className='links'>
                <FontAwesomeIcon
                icon={'globe'}
                title={'site'}
                aria-hidden='true'
                className='site-icon'
                onClick = {() => { window.open('https://the-people-vs-covid.web.app/', '_blank', 'noreferrer') }}
                />  
                <FontAwesomeIcon
                icon={faGithubAlt}
                title={'github'}
                aria-hidden='true'
                className='github-icon'
                onClick = {() => { window.open('https://github.com/liwll/covid-sim-vizathon-2021', '_blank', 'noreferrer') }}
                />  
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <img src={VaccImg} className='vacc-img' alt='vacc card image'/>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-6 mt-5'>
            <img src={Award} className='award-img' alt='award image'/>
          </div>
          <div className='col-lg-6 mt-5'>
            <div className='content-card-3'>
              <h3 className='card-title'>Experience</h3>
              <p className='card-content'>
                I was quite new into programming at this point of my life. Besides the COVID-19 situation, I was inspired to push through in joining this competition as a way to challenge myself to learn despite being an absolute beginner. In this project, I was in charge of designing the web app and I used Figma. I was also the one who was in charge in developing the visualizations using tableau maps, adding chart.js charts, and fetching data from an API to show the COVID-19 statistics. I developed the simple page layout too so that my teammate can focus on developing the interactive simulation of COVID-19 infection. 
              </p>
              <p className='card-content'>
                Overall, we are proud of what we accomplished in this project. Both of us learned about data visualization and discover the possibilities of APIs in crafting visualizations that are easily understood by the people. 
              </p>
            </div>
          </div>
          <div className='mt-5'>
          <Footer mode="light-mode"/>
          </div>
        </div>
        
    </div>
    </div>
  )
}

export default Vizathon