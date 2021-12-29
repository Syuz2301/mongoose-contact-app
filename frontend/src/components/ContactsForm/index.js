import React from "react";
import { useDispatch } from "react-redux";
import { createContactsThunk, updateContactThunk } from '../../store/actions/contact';

function ContactsForm({data}) {
  
  const {contact, setContact } = data;

  const dispatch = useDispatch();

  const addContact = (e) => {
    e.preventDefault();
    dispatch(createContactsThunk({ contact, setContact }));
  };
    
  function handlePhone(e) {
    setContact({...contact, phone : e.target.value});
  };

  function handleName(e) {
    setContact({...contact, name : e.target.value });
  };

  function editContact() {
    dispatch(updateContactThunk({ contact, setContact }));
  };

  return (
    <form className="form" onSubmit={addContact} method="post" > 
        <label>Name</label>
        <input className="name input" type="text" name="name" required 
            onChange={handleName} value={contact.name} 
        />
        <br/>
        <label>Phone</label>
        <input className="phone input" type="text" name="phone" required
            onChange={handlePhone}  value={contact.phone}
        />
        <br/>
        <button className="add-contact" type="submit">Add new Contact</button>
        <button className="edit-contact" type="button" onClick={editContact}>Edit</button>
    </form>
  );
}

export default ContactsForm;