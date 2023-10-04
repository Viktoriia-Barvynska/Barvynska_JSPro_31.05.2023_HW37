
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLoaderData, Link} from "react-router-dom"
import { updateContact } from "../store/reducers/contacts";

const EditContact = () => {
  const dispatch = useDispatch();

  const loaderData = useLoaderData();
    
  const [editContact, setEditContact] = useState({
        id: loaderData.id,
        name: loaderData.name,
        surname: '',
        phone: loaderData.phone,
      });
      

      const editInputChange = (e) => {
        const { name, value } = e.target;
        setEditContact({ ...editContact, [name]: value });
      };

      const handleEditContact = () => {
        dispatch(updateContact(editContact))
        };
        
  return (
    <>
    <h2>Редагувати</h2>
    <div>
          <label>Ім'я:</label>
          <input
            type="text"
            name="name"
            value={editContact.name}
            onChange={editInputChange}
          />
        </div>
        <div>
          <label>Телефон:</label>
          <input
            type="text"
            name="phone"
            value={editContact.phone}
            onChange={editInputChange}
          />
        </div>
        <div>
          <button onClick={handleEditContact}>
          <Link to='/'>Зберегти </Link>
           </button>
        </div>
  </>)
}

export default EditContact