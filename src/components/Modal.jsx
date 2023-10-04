

import { useDispatch } from 'react-redux';
import {  hideModal } from '../store/reducers/modal';

import '../scss/modal.scss';

const Modal = ({yesDeleteContact, noDeleteContact}) => {
    
    const dispatch = useDispatch();
    

    const handleYesDelete = () => {
        yesDeleteContact(); 
        // dispatch(hideModal());
      };
    
      const handleNoDelete = () => {
        noDeleteContact(); 
        // dispatch(hideModal());
      };


  return (
    <div className='modal-container'>
        <div className='modal'>
            <div className='modal-content'>
                <h1>Ви впевнені?</h1>
            </div>
            <div className='modal-footer'>
                <button onClick={handleYesDelete} className='btn btn-yes'>Так</button>
                <button onClick={handleNoDelete} className='btn btn-cancel'>Ні</button>
            </div>
        </div>
    </div>
  )
}

export default Modal