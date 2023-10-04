import { useState } from "react";
import { Link } from "react-router-dom";
import { addContact } from "../store/reducers/contacts";
import { useDispatch } from "react-redux";

const AddContact = () => {
    const [newContact, setNewContact] = useState({
      name: '',
      surname: '',
      phone: '',
    });
    const dispatch = useDispatch();
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNewContact({ ...newContact, [name]: value });
    };
  
    const handleSaveContact = () => {
      dispatch(addContact(newContact));
        setNewContact({
        name: '',
        surname: '',
        phone: '',
      });
    };


    
   
    return (
      <div>
  
        <h2>Додати новий контакт</h2>
        <div>
          <label>Ім'я:</label>
          <input
            type="text"
            name="name"
            value={newContact.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Прізвище:</label>
          <input
            type="text"
            name="surname"
            value={newContact.surname}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Телефон:</label>
          <input
            type="text"
            name="phone"
            value={newContact.phone}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button onClick={handleSaveContact}>
          <Link to='/'>Зберегти</Link>
           </button>
        </div>
       
      </div>
    );
  }

export default AddContact