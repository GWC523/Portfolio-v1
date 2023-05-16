import Navbar from '../Components/Navbar/Navbar'
import ContactList from '../Components/ContactList/ContactList'

/* CSS */
import './Works.scss'

/* Images */
import msersImg from '../Assets/Images/Works/msers.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Works() {
  return (
    <div className='background-2'>
    <Navbar path='/works' backPath='/'/>
    <ContactList/>
    <div className='page'>
        <h1 className='works-title'>Works</h1>
        <div className='row work-cards'>
            <div className='col-lg-4'>
                <div className='work-card'>
                    <img src={msersImg} className='content-img' alt='msers'/>
                    <div className='description row'>
                        <div className='col-10'>
                            <p className='card-title'>Student Engagement Detector</p>
                            <p className='card-subtitle'>  ReactJS + Bootstrap + Django  (Research Paper)</p>
                            <ul className='tags'>
                                <li><span className='frontend'></span>Frontend</li>
                                <li><span className='backend'></span>Backend</li>
                            </ul>
                        </div>
                        <div className='col-2'>
                            <FontAwesomeIcon
                                icon='chevron-right'
                                title={'visit'}
                                aria-hidden='true'
                                className='visit-icon'
                            />  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Works