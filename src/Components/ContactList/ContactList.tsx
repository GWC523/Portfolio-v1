import React, {useRef, useState} from 'react';
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Modal from '../../Components/Modal/Modal';

/* CSS */
import './ContactList.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ContactList() {
  const [seeEmail, setSeeEmail] = useState(false);
  const copyRef = useRef<HTMLInputElement>(null);
  let github_link = 'https://github.com/GWC523';
  let LinkedIn_link = 'https://www.linkedin.com/in/gwyneth-chiu/';

  return (
    <div className='contact-list-cont'>
        <ul className='contact-list'>
            <li>
                <a href="mailto:gwynethwongchiu@gmail.com " className='mail'>
                <FontAwesomeIcon
                icon={'envelope'}
                title={'email'}
                aria-hidden='true'
                className='email-icon'
                onClick={() => setSeeEmail(true)}
                />  
                </a>
            </li>
            <li>
                <FontAwesomeIcon
                icon={faGithubAlt}
                title={'github'}
                aria-hidden='true'
                className='github-icon'
                onClick = {() => { window.open(github_link, '_blank', 'noreferrer') }}
                />  
            </li>
            <li>
                <FontAwesomeIcon
                icon={faLinkedinIn}
                title={'github'}
                aria-hidden='true'
                className='github-icon'
                onClick = {() => { window.open(LinkedIn_link, '_blank', 'noreferrer') }}
                />  
            </li>
        </ul>
    </div>
  )
}

export default ContactList