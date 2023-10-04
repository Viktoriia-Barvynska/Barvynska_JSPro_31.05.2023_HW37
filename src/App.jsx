import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './pages/Root';
import AddContact from './pages/AddContact';
import EditContact from './pages/EditContact';
import ContactsList from './pages/ContactsList';

import {displayContacts} from './store/reducers/contacts';
import './App.css'

function App() {
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    async function getContacts () {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        dispatch(displayContacts(data));
    }
    getContacts()
  }, []); 
 

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
           path: '/',
          element: <ContactsList />
        },
        {
           path: '/add',
          element: <AddContact />
        },
        {
          path: '/edit/:userId',
          element: <EditContact />,
          loader: async ({params}) => {
            // console.log(params)
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
            const data = await res.json();
            // console.log(params.userId)
            // console.log(data)
            return data
          }
        }
        
      ]
  }])
  return (
    <>
    
    <RouterProvider router={router} />
     
    </>
  )
}

export default App
