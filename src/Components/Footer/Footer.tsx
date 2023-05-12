import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* CSS */
import './Footer.scss';

interface FooterProps {
  mode?: string,
}

function Footer({mode} : FooterProps) {
  return (
     <p className={'created-by ' + mode}>
            <FontAwesomeIcon
                icon={'heart'}
                title={'heart'}
                aria-hidden='true'
                className='heart-icon'
                />  
              <br/>
            Designed and Developed by Gwyneth Chiu
    </p>
  )
}

export default Footer