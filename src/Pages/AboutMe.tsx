import React, {useState} from 'react';
import useMightyMouse from 'react-hook-mighty-mouse';

/* Images */
import Vizathon from '../Assets/Images/AboutMe/vizathon.png';
import TcsPH from '../Assets/Images/AboutMe/tcs.png';
import TcsASEAN from '../Assets/Images/AboutMe/tcsfinals.png';
import ChatBubble from '../Assets/Images/AboutMe/ChatBubble.png';

/* CSS */
import './AboutMe.scss';
import Navbar from '../Components/Navbar/Navbar';
import ContactList from '../Components/ContactList/ContactList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAws, faBootstrap, faGitAlt, faJs, faNodeJs, faPhp, faPython, faReact, faSass } from '@fortawesome/free-brands-svg-icons';
import AwardCard from '../Components/AwardCard/AwardCard';
import { Animate } from '../Components/Animations/AnimationLibrary';

function AboutMe() {
  const [introStyle, setIntroStyle] = useState('prof');
  const [companyOption, setCompanyOption] = useState('myt');
  const [isHover, setIsHover] = useState(false);

  const {
    selectedElement: {
      position: { angle: angleLeftEye },
    },
  } = useMightyMouse(true, 'left-eye', { x: 20, y: 20 });
  const {
    selectedElement: {
      position: { angle: angleRightEye },
    },
  } = useMightyMouse(true, 'right-eye', { x: 20, y: 20 });

  let newAngleLeftEye = angleLeftEye! - 180;
  let newAngleRightEye = angleRightEye! -180;

  const rotateLeftEye = `rotate(${-newAngleLeftEye!}deg)`;
  const rotateRightEye = `rotate(${-newAngleRightEye!}deg)`;

  return (
    <>
    <div className='background-2'>
    <Navbar path='/aboutMe' backPath='/'/>
    <ContactList/>
    <div className='page'>
      <div className='intro-cont row'>
      <div className='col-sm-6'>
        <h1 className='name'>Gwyneth Chiu</h1>
        <p className='introduction prof'>
          {introStyle === 'prof' ?
          (<>Are you in need of a junior software developer who can think outside the box and approach problems from multiple angles? Look to me →<span className='avatar' onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)}>👩🏻‍💻</span>! With a passion in design, a love for learning, and an interest in AI, I bring a well-rounded perspective and a dedication to innovation to every project. Let's work together to create forward-thinking solutions that make a difference in the world.</>)
          :
          'A 4th year computer science student at the University of the Philippines in Philippines (of course) looking for a junior software developer job 🇵🇭  Ever since I was a kid I was interested in web development. I remember making a Wordpress website and being proud of that easy creation. However, I did not cross my mind to learn programming and web development until I got into college. As a noob, I am trying my best to learn as much as I can! I am currently interested in web development with a specialty in ReactJS and Django. By the way, I love lo-fi and coffee!'
          }
        </p>
        <ul className='intro-option'>
          <li className='option'>
            <button className={introStyle === 'prof' ? 'prof-button chosen' : 'prof-button'} onClick={() => setIntroStyle('prof')}>🤵🏻‍♀️ Professional</button>
          </li>
          <li className='option'>
            <button className={introStyle === 'casual' ? 'prof-button chosen' : 'prof-button'} onClick={() => setIntroStyle('casual')}>🙋🏻‍♀️ Casual</button>
          </li>
        </ul>
      </div>
      <div className='col-sm-6'>
        <div className='eyes-follow'>
          <div className='eyes'>
            <div id='left-eye'>
              <div className='left-eyebrow'></div>
              <div className='eye' style={{ transform: rotateLeftEye }}>
              <div className='pupil' />
              </div>
            </div>
            <div className={isHover ? 'mouth happier' : 'mouth'}></div>
            <div id='right-eye'>
              <div className='right-eyebrow'></div>
              <div className='eye' style={{ transform: rotateRightEye }}>
              <div className='pupil' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div className='page-2'>
    <Animate.FadeUp>
     <h2 className='skills-header'>Skills ------</h2>
    <div className='skill-cont row'>
    <ul className='skill-list'>
          <li>
            <span className='skill-tag js'>
               <FontAwesomeIcon
                icon={faJs}
                title={'js'}
                aria-hidden='true'
                className='skill-icon'
                />  
              Javascript
            </span>
          </li>
           <li>
            <span className='skill-tag ts'>
              <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEhklEQVR4nO2Wy28bRRzHA7S0TWji5mGnbpPyBiGEQCBUIXGhUk9IqKWlFw78Bxw48mqAxEnqvEqb5mFIKRI5NC0XDlREVFVppTQUISSoVGI79m7Xm/gRJwQ7dm3/0Mx41ju7a69n0644+Cd9JD/W8uc7+s7s1tXVpja1qc3/cp75Zg0oT59FrGKemmJ58uukwhNfUVYwj/tKPDaJSCg8OkGJw75xls6xmELHGQJ3ACJtLK6WLonrpYm4sbRWvHMsrpMmRGHvaNRKgGqkk/dMunNML62GOwART3JUJLGpinSciemk95xGLGO4A9jR6w6D1VZLI9ynCNwB7Oj1XhNpxO4vlzDcAezo9R6VuFrafYpIU9pPWgxwv3vtNpEmyBjuAHb02q2qCCtOpF0jJbgDbLYi90LaNSKDcziC4Q5gR6/by4hTaUrbkMUA97vXLhNpggStgxJ/ADt67RopL03FKdwB7Oi100S6ZeCOAncAeyoi6aS14s1eAncAO3rdaiLd7BUxu06IVgJUrsh8JAu803t9TRF2j0Tgg5+ScMmfhtBqDlbSeYy8noNfpQxM/b4Or/hkLO/otxDArNfzEn8Az7U1vMLPj8twK3bX9PqjM1Fw9AsY7gBmFdlMgJ+DG7rv7uYB4qk889mb08vQ1CdguAOY9frgdAyOXIzD2xcIRy/GmT//M5qFw+djCofOx+ClSRlenIgw1+ULAO//uAJtXlQVAXYPiXDsQhRmA2k4cE6Gxt4whjsA73ndPiwxYteFjG5Doj4fmYkx180G0licrnRTHxFGOIqvd3osBqj+vJbANXSHEbsmZBRpNe/MRJnr/opmwekVGXEqvdMTUuAOwHteOwe1ATYUaXSK0M343KgEBU3/58QMvD4l66Qf6SnBHYD3vHYOiroAVFpbkW//WNdt4gIA/HA7Bft9kkp8ERq6CdwBykkb9RrRNqAPYNRrxL5hEW5KGV0INLkCwOTNNWjpC2Hx+i8I3AFQr82kSxURoNUrsAHCGxV73T4QBt9v/+BTyGjQ7x0eJB+EHZ8HrQQwvqUb9RqtcssJNsAv4Q3DzajudUP3Irzmk+DSQsowxPHLCSxvKYCZtLbXzf1hXQAjaXWvG5SKBOHguQiEkuzdGb3f/lkAwx1AWxG9tMDUwyhAZWkiXl+sCOKF0+w+QvXa3hWAbV0WApSTLtfrXX0hXQC1NBV/eVyE975fhvqi9A4MWeVnT7KLkEjnYVuXHx4+7ucPUI20uiKOXk2AUJqpCF3pA2fJo8StaBZ3/NC0DK9OiPDWdzLcENlnpFl/Cstv/XTBSgBWWiuu7XWTZ5H586uhtK4iiDem2EeOSnN4OoLlLQWoRlpdj8YefQAqTTciopoAhQJA95UEbPlkocjf/AEqHX1Gp0hjT1AXQC2ONiKiuScA784swejcKlwOpMCfyELs3xwsredgTkjDxPwq7B8XFPGHPiZwB6hGWlsP7WpTabQR6Wak0GpsLaJebSpNefCj21YCVHf0aaVL4npprfiWitJEHPHAhxYC1KY2talNnR3zH8dEHBBOG09ZAAAAAElFTkSuQmCC' className='ts-skill-icon'></img>
              Typescript</span>
          </li>
          <li>
            <span className='skill-tag py'>
               <FontAwesomeIcon
                icon={faPython}
                title={'python'}
                aria-hidden='true'
                className='skill-icon'
                />  
              Python
            </span>
          </li>
          <li>
          <span className='skill-tag cplus'>
              <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFEUlEQVR4nO2ZXUxbZRjHn46oUQE/ksULvWBBr7xw48K4TJ1LjNmFF462zs0BMc6puC8+CgiFUhhkyeaFZm5hOYdtgA6aCWgYLkP6AaUU+R6Er8BAhgutbPJVoKX0Me+BUCk9H6Wn0Av+yZOcnNP3nN//Pc/zvG9zALa1rSDU6caXQFFngJz2JVB3OEGhr4VT1Tsh6CXHEEjSXQJ1uxPyu3FNqNuckKQvBpXmSQhKJepOQVaLbR24Z2S1zEOSPhWCRgk1ByHD/JAX3DMyzI8g8c5HWweedudVSDG2QJ6P4GuiCyGtYQDO1r6+eeCq6nBINf4CuR2ujYN7RG6nCxSGGjhT8XzgwBEloKjLgexWh2jg+Z6F3r4IKYYCUOEOceFPa+NA+ecUH0BU4SDmGK2o+2sWeycWcNaxxAQ5JufU9VbmN7xGMptnIaEm3n/wxPq3Id00xPUwSX43ystHsf+RHYWqb2IBZeWjzFhOI8qmcUg2fOA7uMr0IqQazZDXxfmAyCsDaP57DjeqxrE53HV5gNsEYUgxmkFhDBNuIN08wvea9xXdR4ttEf3VxJwTD/w0zG3iWyPCyeo+4Qby7nHe8L2SYbQ7XSiW7E4Xvlt8f/2zVM0IZ+8iKPQISVoUboADPuLHfrSKMPPe3kTklZV0yu1ESPgDIVm3DM+Ezn8DpOj8yXk+NTywoYTAEvhVcBENkG7DJ1IXGXoL7qYH8dkLPUzsoQdRabBwvrmm0Wnce6nNC7hIBsjsk/bHJU3vFIZd7GFNv/DvevBW39SaMQ8mFzDmZi9KUtjARTJAFiA+eN6+vjIRxITNsYSqu8P4dHodD7hIBsgKy5U2XDPv2dcJ9Cu5JoHgIhkgWwE2kZwXBJ/W4G6LCv3qeG/A66/5aYBrq/AGxbO/yWpGOOMG3xIDM/YlVgOhbOlzzls/d8N5ivuanwamOQysz/8uhGQ9wtEShOPlCMlaEQzoA5dCpOe79y0mhNibCDLaHR9fR/jyV9Y3AYJSyE8D2hH2Is40WBBULQhfVK4F94wjRQjxVVtjQF3P3katM3YMjyvhhv9fhH6uwTd/aPWxjeoDu5DdahxGiZwffoe8ECuaRtDlQtR0WjHyfNPmGBCylSAmwmOKWOGfiy3G8qaRNWMcThcWmB/izuyGwBogISsb4jTApNPUPGaWtmJUSiWGHivCsJgi5jirtBX/mZ5nHfd4bhFTbw9hSEAM5HYgnPwdJYevYWO/BQMlY+84Sj65gfDVb8t9328D5P9oohbhyI3VNIj4uoyZZbE1Mb2Akd9o3Cn3aQkzaRszcO7e8r7l2M9ec3l/1m20L7IvbL7KvriE72RWea+d2NLl/RNZQwTrM00FXzfZp6xCy+S8KDN/ILuau3vJCxHiNFrhBk4UPAFSSg0y2sZ1413xGjT5URPG3nEmJXkmy8awHPz+KfBZ8usvg5QqACnlZHsA6f3Si7XYOzYpGLxn7F+MvlDLA065QEZr4PC1CPBbhwqjQEbr+NJqj6ISszVtWNv1kDE0M+9gghyTc6qyNtydXCFktW4EObUXRFc0/T7I6G6hWwbfgxoAGSWHgIrUh5w+AVLKKhq4lH4MUip1Y3m+UR29/ALI6PMgoxf8AHcwNSant/ADYHTha0yxLRedL+lSA9Krm/hlhk+Hrr4FUtokALwV5PR+CE6hhClCKTW8Pl2oMaZ25JoQCHp9WPAMyCglyKihlVAy57a1LQg6/QeJ2JhT+6JnrAAAAABJRU5ErkJggg==' className='cplus-skill-icon'></img>
              C++
            </span>
          </li>
          <li>
            <span className='skill-tag php'>
               <FontAwesomeIcon
                icon={faPhp}
                title={'PHP'}
                aria-hidden='true'
                className='skill-icon'
                />  
              PHP
            </span>
          </li>
          <li>
            <span className='skill-tag react'>
               <FontAwesomeIcon
                icon={faReact}
                title={'ReactJS'}
                aria-hidden='true'
                className='skill-icon'
                />  
              ReactJS
            </span>
          </li>
          <li>
            <span className='skill-tag react'>
               <FontAwesomeIcon
                icon={faReact}
                title={'ReactNative'}
                aria-hidden='true'
                className='skill-icon'
                />  
              React Native
            </span>
          </li>
          <li>
            <span className='skill-tag django'>
              <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABfElEQVR4nO2Vvy9DURTHr4GUwWKw6WLQc8rSpYNIIyb/A6O9SZ3zLN4sEY1JxND4kfacOxjEwGCxCYlFhMHCJAwSjFSaNPJ6kRR9NyT9Jnd6732/n3d/fK8xbbX1Q6FyNTqafdYyYRtA//ASeBH6Ahi2QQaEl0HoBIRvQPgWlI9jBwAbdoHSmhv01Yh+2xI4VN5qNrzlAGB53DUB5ScQVlAuolA5XgDhjQYT4aOh7aCv2ZAWANBV1CAlPOa+EzfAc9Qga/PdXgFQ6DFqkNkJe/wCKF02bEDLo14BQGndMTlMlsKEPwD72TGka7A8j8LTqFSIvYjAPYq+mzCzOtMJQiuo9PItgKrpcDrk1fxG6XJhBJUW6xfQXc2w1ooodA/K5yC8i0JL7zNneaBh6YQfjE+hnZ1yZuDUW3jW5rtB+MK5Q4pewpOlMAFK+x/2R4VzsYenJJh0y6v+93vGh7DCuVpZOWt/li7P9RufSkkwgUIHoLwwuBn2eg03/1VvltBhZSfUJW0AAAAASUVORK5CYII=' className='django-skill-icon'></img>
              Django
            </span>
          </li>
          <li>
            <span className='skill-tag sass'>
               <FontAwesomeIcon
                icon={faSass}
                title={'Sass'}
                aria-hidden='true'
                className='skill-icon'
                />  
              Sass
            </span>
          </li>
          <li>
            <span className='skill-tag nodejs'>
               <FontAwesomeIcon
                icon={faNodeJs}
                title={'NodeJs'}
                aria-hidden='true'
                className='skill-icon'
                />  
              Node.JS
            </span>
          </li>
          <li>
            <span className='skill-tag bootstrap'>
               <FontAwesomeIcon
                icon={faBootstrap}
                title={'Bootstrap'}
                aria-hidden='true'
                className='skill-icon'
                />  
              Bootstrap
            </span>
          </li>
          <li>
            <span className='skill-tag git'>
               <FontAwesomeIcon
                icon={faGitAlt}
                title={'Git'}
                aria-hidden='true'
                className='skill-icon'
                />  
              Git
            </span>
          </li>
          <li>
            <span className='skill-tag aws'>
               <FontAwesomeIcon
                icon={faAws}
                title={'AWS'}
                aria-hidden='true'
                className='skill-icon'
                />  
              AWS
            </span>
          </li>
           <li>
            <span className='skill-tag mysql'>
              <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACBUlEQVR4nL2UT0jUURDHv2phhQeJiECK6NI5OghW1CUwUKOdeZh1CC+SSIc6RYc2gk51sPKy/WZ2s6hDQQoR4rFDZNculQqhYNKhDlFURG68P7Eu7O/XPnH7wh72x/fNZ+a9mQH+i0xyFKQLYP0G1udgOY3D+Q3rB2CZBWu56kfyE6wfwPIUpOdhkq1rB5B+dkFzSS9YB0H6rgbwK4xeRvfN1jVUoNd9IHkD82iz+2YD9Zd2g+UkWJ6BZSV4XmCgsC0OYIOSvPaZ6hX/TYfBOlGpsngIJO+D5xV6ClviIJQcCRnOuv/5fDNIb1UnUtoBkvkAGY2togUsH/3hYld6IrIPrL9A+jvTV1MsV8OjvnQVpInkRqh2BlE6Xmr3remuYCDVZ8baQLLsfHaGosQ67Q9KX6bPtqyvYjIO8PcRjewFyk2pvhP3todh/OEqjwB89wB3DePZXp0KbzYYA1gMh67V0VFnw5Qvu7mxnVgH4HG428rk5lM6qr+4E6RzlZUiMzB3O7IBRg+uCr4SOmok1e8GMsmFbWy9S8jpnmwIyzmQfgLrHRi9CNYv/zxkCrtccA95G/fwRi64/XOmtCk1IZtE1fbVB/UDrEyyHyY5hVoivb1qrT8BaSeGChuxfio3geSS21F2n9kZaYhIO31XyUM0TGasDSz3kUsONA7irkyPNRBQ0R9ebhW4l4+1/gAAAABJRU5ErkJggg==' className='mysql-skill-icon'></img>
              MySQL
            </span>
          </li>
        </ul>
     </div>
    </Animate.FadeUp>
    <Animate.FadeUp>
     <h2 className='exp-header'>Where I've Worked ------</h2>
     <div className='exp-cont row'>
          <div className='col-sm-3'>
            <ul className='company-list'>
              <li 
                className={companyOption === 'myt' ? 'active' : ''}
                onClick={() => setCompanyOption('myt')}
              >
                <span className='company-option'>MYT SoftDev Solutions Inc.</span>
              </li>
              <li 
                className={companyOption === 'shopme' ? 'active' : ''}
                onClick={() => setCompanyOption('shopme')}
              >
                <span className='company-option'>ShopMe</span>
              </li>
            </ul>
          </div>
          <div className='col-sm-7'>
            {companyOption === 'myt' && (
              <>
              <div className='exp-content'>
                <p className='role-header'>Junior Software Developer </p>
                <p className='date-subheader'>Oct 2021 – Dec 2022</p>
                <ul className='experience-list'>
                  <li>Led a project in developing an Enterprise Resource Planning System Software
                  for a diagnostics center to help them manage daily activities such as managing
                  supplies, finances, and services. Software is developed with ReactJs, PHP, and
                  MySQL.
                  </li>
                  <li>
                    Led in the development of an Enterprise Resource Planning System Software for
                    a cargo airline in the Philippines. 
                  </li>
                  <li>
                    Built a PHP-based group chat system from scratch for a virtual event platform.
                  </li>
                  <li>
                    Built a lucky draw app using PHP, HTML/CSS, and MySQL that has been used by
                    various virtual events.
                  </li>
                </ul>
              </div>
              <div className='exp-content'>
                <p className='role-header'>Junior Software Developer Intern</p>
                <p className='date-subheader'>July 2021 – Oct 2022</p>
                <ul className='experience-list'>
                  <li>
                    Reworked and improved the front-end for a booking site of a company.
                  </li>
                  <li>
                    Built a billing list system for a construction supplier company.
                  </li>
                  <li>
                    Collaborated and assisted in developing virtual event websites with a total of
                    four projects.
                  </li>
                  <li>
                    Collaborated with a senior software developer in developing a virtual event
                    website for an anniversary event of a company.
                  </li>
                  <li>
                    Developed a public message board system for the virtual event platform.
                  </li>
                </ul>
              </div>
              </>
            )}
            {companyOption === 'shopme' && (
              <>
              <div className='exp-content'>
                <p className='role-header'>Junior Software Developer </p>
                <p className='date-subheader'>June 2021- August 2022</p>
                <ul className='experience-list'>
                  <li>
                    Redesigned, developed, and integrated the product info page and cart to
                    update the ShopMe app.
                  </li>
                  <li>
                    Designed the wish list feature and assisted in the development and integration
                    of the new feature to the app.
                  </li>
                  <li>
                    Added the email functionality to send payment information after a customer
                    places an order.
                  </li>
                </ul>
              </div>
              </>
            )}
          </div>
     </div>
     </Animate.FadeUp>
    </div>
    <div className='page-3'>
     <h2 className='awards-header'>Activities & Awards</h2>
     <div className='award-cards-cont row'>
         <div className='col-sm-4'>
          <Animate.FadeIn>
            <Animate.FadeUp>
              <AwardCard
                  image={Vizathon}
                  header='Vizathon 2021'
                  subheader='Innovation Award'
                  content='The People vs Covid-19 is a web app that shows interactive data visualization of COVID-19 cases around the world. It was awarded the innovation award against 60 projects.'
                  seeMoreLink='/aboutMe/Vizathon2021'
                  redirectLink='https://the-people-vs-covid.web.app/'
                />
            </Animate.FadeUp>
          </Animate.FadeIn>
         </div>
         <div className='col-sm-4'>
          {/* <Animate.FadeIn> */}
            <Animate.FadeUp>
            <AwardCard
                image={TcsPH}
                header='TCS Sustainathon PH 2021'
                subheader='1st Runner Up'
                content="Hosted by TCS Philippines, we secured the finalist spot for the ASEAN Finals as the top 2 team. With the United Nation's sustainable goal no.4 in mind (quality education), we designed Kopi-han, a peer-to-peer learning platform."
                seeMoreLink=''
                redirectLink=''
              />
            </Animate.FadeUp>
          {/* </Animate.FadeIn> */}
         </div>
         <div className='col-sm-4'>
          <Animate.FadeIn>
            <Animate.FadeUp>
              <AwardCard
                  image={TcsASEAN}
                  header='TCS Sustainathon ASEAN 2021'
                  subheader='1st Runner Up'
                  content="We competed against the finalists from Singapore and Malaysia at the headquarters of TCS Singapore. With 6 teams, we won 1st runner-up. Representatives from LinkedIn, Stewardship Asia Centre, Temasek Trust, TCS and 2020 Sustainathon champion"
                  seeMoreLink=''
                  redirectLink=''
                />
            </Animate.FadeUp>
          </Animate.FadeIn>
         </div>
     </div>
    </div>
    <div className='page-4'>
      <div className='footer'>
        <Animate.FadeUp>
        <div className='chat-me-cont row'>
          <div className='col-lg-5 d-flex justify-content-start'>
            <img src={ChatBubble} className='chatbubble'/>
          </div>
          <div className='col-lg-7'>
            <p className='header'>Let's have a chat!</p>
            <p className='content'>My inbox is always open whether you want to say hi, want to have a question, or offer an opportunity. </p>
            <button className='say-hello-btn'> <a href="mailto:gwchiu@up.edu.ph" className='mail'>Say Hello</a></button>
          </div>
        </div>
        </Animate.FadeUp>
        <Animate.FadeUp>
          <p className='created-by'>
            <FontAwesomeIcon
                icon={'heart'}
                title={'heart'}
                aria-hidden='true'
                className='heart-icon'
                />  
              <br/>
            Designed and Developed by Gwyneth Chiu
          </p>
        </Animate.FadeUp>
      </div>
    </div>
    </div>
    </>
  )
}

export default AboutMe