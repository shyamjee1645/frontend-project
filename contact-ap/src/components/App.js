import AddContact from './AddContact';
import './App.css';
import ContactList from './ContactList';
import Headers from './Header';
import React,{useState,useEffect} from "react";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts,contact]);
  }
  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) setContacts(retrieveContacts);
  },[])
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts])
  return (
    <div className='ui container'>
      <Headers />
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
