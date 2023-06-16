import React, { useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    const existingContact = contacts.find(contact => contact.name === name);

    if (existingContact) {
      alert(`${existingContact.name} is already in contacts!`);
      return;
    }

    const newContact = {
      id: generateId(),
      name,
      number,
    };
    setContacts([...contacts, newContact]);
  };

  const deleteContact = id => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const generateId = () => {
    return 'id-' + Math.random().toString(36).substr(2, 9);
  };

  const filteredContacts = filterContacts();

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} addContact={addContact} />
      <h2>Contacts</h2>
      <Filter filterValue={filter} setFilter={setFilter} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
