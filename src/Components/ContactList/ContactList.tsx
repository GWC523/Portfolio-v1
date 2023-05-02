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

  const handleCopyToClipboard = (str: any) => {
    if(copyRef.current) {
      copyRef.current.select();
      navigator.clipboard.writeText(str)
    }
  }

    const copyToClipboardInput = () => {
    return (
      <div className='copy-modal-container'>
      <div className='copy-text'>
        <input type='text' className='copy-text-input' ref={copyRef} value='gwchiu@up.edu.ph' />
        <button onClick={() => handleCopyToClipboard('gwchiu@up.edu.ph')}>
          <FontAwesomeIcon
            icon={'clone'}
            title={'copy to clipboard'}
            aria-hidden='true'
            className='copy-icon'
          />
        </button>
      </div>
      </div>
    )
  }

  return (
    <div className='contact-list-cont'>
        <ul className='contact-list'>
            <li>
                <FontAwesomeIcon
                icon={'envelope'}
                title={'email'}
                aria-hidden='true'
                className='email-icon'
                onClick={() => setSeeEmail(true)}
                />  
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
         <Modal
            title='Contact Me'
            subTitle='via email'
            showModal={seeEmail}
            setShowModal={setSeeEmail}
            children={copyToClipboardInput()}
        />
    </div>
  )
}

export default ContactList