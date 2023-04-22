import React from 'react';

/* CSS */
import './Modal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ModalProps {
  title?: any,
  subTitle?: any,
  setShowModal: Function,
  showModal: Boolean,
  children: any
}


function Modal({title, subTitle, setShowModal, showModal, children} : ModalProps) {

  return (
    <>
    {showModal && (
        <div className='modal-1'>
            <div className='modal-main'>
               <div className='row'>
                <div className='col d-flex justify-content-start'>
                    <span className='modal-title'>{title}</span>
                </div>
                <div className='col d-flex justify-content-end'>
                    <button type='button' className='modal-close-button' onClick={() => setShowModal(false)}>
                        <FontAwesomeIcon
                            icon={'xmark'}
                            title={'close'}
                            aria-hidden='true'
                            className='modal-close-icon'
                        />
                    </button>
                </div>
               </div>
               <div className='row'>
                    <div className='col d-flex justify-content-start'>
                        <span className='modal-subtitle'>{subTitle}</span>
                    </div>
               </div>
               <div className='row'>
                    <div className='col'>
                        {children}
                    </div>
               </div>
            </div>
        </div>
    )}
    </>
  )
}

export default Modal