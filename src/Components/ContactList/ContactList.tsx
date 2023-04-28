import React from 'react';

/* CSS */
import './ContactList.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function ContactList() {
  let github_link = 'https://github.com/GWC523';
  let LinkedIn_link = 'https://www.linkedin.com/in/gwyneth-chiu/';

  return (
    <div className='contact-list-cont'>
        <ul className='contact-list'>
            <li>
                <FontAwesomeIcon
                icon={'envelope'}
                title={'email'}
                aria-hidden='true'
                className='email-icon'
                />  
            </li>
            <li>
                <FontAwesomeIcon
                icon={faGithubAlt}
                title={'github'}
                aria-hidden='true'
                className='github-icon'
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