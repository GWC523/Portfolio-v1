import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/* CSS */
import './WorkCard.scss'

interface WorkCardProps {
  img: any,
  title: string,
  subtitle: string,
  tags: any,
}

function WorkCard({img, title, subtitle, tags}: WorkCardProps) {

  const tagContent = () => {
    let tagElements = [];
    for(var i = 0; i < tags.length; i++) {
        tagElements.push(
            <li><span className={tags[i]}></span>{tags[i]}</li>
        )
    }
    return tagElements
  }

  return (
    <div className='work-card'>
        <img src={img} className='content-img' alt='msers'/>
            <div className='description row'>
                <div className='col-10'>
                    <p className='card-title'>{title}</p>
                    <p className='card-subtitle'>{subtitle}</p>
                    <ul className='tags'>
                        {tagContent()}
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
  )
}

export default WorkCard