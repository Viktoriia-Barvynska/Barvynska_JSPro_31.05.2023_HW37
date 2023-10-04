
import Modal from '../components/Modal'
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

import { showModal, hideModal } from '../store/reducers/modal';
import {deleteContact} from '../store/reducers/contacts';



const ContactsList = () => {
    const getContacts = useSelector(state => state.contacts.contacts);
    const showModalW = useSelector(state => state.modal.show)
    const contactIdToDelete = useSelector(state => state.modal.contactIdToDelete);
          
    const dispatch = useDispatch();

      const handleDeleteContact = (contactId) => { 
            dispatch(showModal(contactId));
            };
          
      const handleConfirmDelete = () => { 
            dispatch(deleteContact(contactIdToDelete));
            dispatch(hideModal());
            };

      const handleCancelDelete = () => {
            dispatch(hideModal());
            };



  return (
    <div>
    <h2>Список контактів</h2>
    
    <table>
      <thead>
        <tr>
          <th>Ім'я</th>
          <th>Прізвище</th>
          <th>Телефон</th>
          <th>Дії</th>
        </tr>
      </thead>
      <tbody> 
          {getContacts.map((contact) => (
          <tr key={contact.id}>
            <td>{contact.name}</td>
            <td>{contact.surname}</td>
            <td>{contact.phone}</td>
             <td>
              
              <button 
              onClick={() => handleDeleteContact(contact.id)}>
                Видалити
              </button>
              {showModalW && contact.id == contactIdToDelete && <Modal yesDeleteContact={handleConfirmDelete}  noDeleteContact={handleCancelDelete}/>}
               
            </td> 
            <td>
              <button>
                <Link to={`/edit/${contact.id}`}>Редагувати</Link>
              </button>
            </td> 
           </tr> 
         ))  
        } 
      </tbody> 
     </table>  
  </div>
  )
}

export default ContactsList