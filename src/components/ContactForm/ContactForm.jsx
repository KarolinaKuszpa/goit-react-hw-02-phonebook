import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = ({ contacts, addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const existingContact = contacts.find(contact => contact.name === name);

    if (existingContact) {
      setErrorMessage(`${existingContact.name} is already in contacts!`);
    } else {
      addContact(name, number);
      setName('');
      setNumber('');
    }
  };

  const handleNameChange = e => {
    setName(e.target.value);
    setErrorMessage('');
  };

  const handleNumberChange = e => {
    setNumber(e.target.value);
    setErrorMessage('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          className={styles.input}
          required
        />
      </label>
      <label className={styles.label}>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleNumberChange}
          className={styles.input}
          required
        />
      </label>
      <button type="submit" className={styles.button}>
        Add contact
      </button>
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </form>
  );
};

export default ContactForm;
