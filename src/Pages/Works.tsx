import Navbar from '../Components/Navbar/Navbar'
import ContactList from '../Components/ContactList/ContactList'
import WorkCard from '../Components/WorkCard/WorkCard'

/* CSS */
import './Works.scss'

/* Images */
import msersImg from '../Assets/Images/Works/msers.png'
import portfolioImg from '../Assets/Images/Works/portfolio.png'
import erpImg from '../Assets/Images/Works/erp.png'
import dentalImg from '../Assets/Images/Works/dentalchart.png'
import simulationImg from '../Assets/Images/Works/memorymanager.png'
import { Animate } from '../Components/Animations/AnimationLibrary'


function Works() {
  return (
    <div className='background-2'>
    <Navbar path='/works' backPath='/'/>
    <ContactList/>
    <div className='page'>
        <h1 className='works-title'>Works</h1>
        <Animate.FadeUp>
        <div className='row work-cards'>
            <div className='col-lg-4'>
                <WorkCard
                    img={msersImg}
                    title='Student Engagement Detector'
                    subtitle='ReactJS + Bootstrap + Django  (Research Paper)'
                    tags={['frontend', 'backend']}
                />
            </div>
            <div className='col-lg-4'>
                <WorkCard
                    img={portfolioImg}
                    title='My Developer Portfolio'
                    subtitle='ReactJS + Bootstrap'
                    tags={['frontend']}
                />
            </div>
            <div className='col-lg-4'>
                <WorkCard
                    img={erpImg}
                    title='ERP System Template'
                    subtitle='ReactJS + Bootstrap'
                    tags={['frontend']}
                />
            </div>
        </div>
        </Animate.FadeUp>
        <Animate.FadeUp>
        <div className='row work-cards'>
            <div className='col-lg-4'>
                <WorkCard
                    img={dentalImg}
                    title='Digital Dental Chart'
                    subtitle='ReactJS + Bootstrap'
                    tags={['frontend']}
                />
            </div>
            <div className='col-lg-4'>
                <WorkCard
                    img={simulationImg}
                    title='Memory Management Simulation'
                    subtitle='ReactJS + Bootstrap'
                    tags={['frontend']}
                />
            </div>
        </div>
        </Animate.FadeUp>
    </div>
    </div>
  )
}

export default Works