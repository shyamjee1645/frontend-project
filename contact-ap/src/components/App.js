import AddContact from './AddContact';
import './App.css';
import ContactList from './ContactList';
import Headers from './Header';
import {v4 as uuid} from 'uuid';
import React,{useState,useEffect} from "react";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact)
    console.log(contacts)
    const newContact = {id: uuid(),...contact}
 setContacts([...contacts, newContact]);
 console.log("working till here");
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    })
    setContacts(newContactList);
  }

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) setContacts(retrieveContacts);
  },[])
  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    } else {
      localStorage.removeItem(LOCAL_STORAGE_KEY); // Remove the key if there are no contacts
    }
  }, [contacts]);
  return (
    <div className='ui container'>
      <Headers />
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} getContactId={removeContactHandler}/>
    </div>
  );
}

export default App;
