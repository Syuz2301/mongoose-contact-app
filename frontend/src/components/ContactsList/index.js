import React from 'react';
import { useDispatch } from 'react-redux';
import {deleteContactThunk, contactFieldsThunk} from '../../store/actions/contact';


function ContactsList({ datas, data }) {

    const {contact, setContact } = data;
    const dispatch = useDispatch();

    function deleteContact(id) {
        dispatch(deleteContactThunk(id));
    };

    function fillInputs(id) {
       dispatch(contactFieldsThunk(id, { contact,setContact }));
    };
    
    return (
        
        <div className="contacts">
        {
            datas &&
            datas.map((el) => {
                return  <div className="contact-item" key={el._id}>
                <div>{el.name}</div> 
                <div>{el.phone}</div>
                <button className="edit" onClick={() => fillInputs(el._id)}>Edit</button>
                <button className="delete" onClick={() => deleteContact(el._id)}>Delete</button>
                </div>
            })
        }
        </div> 
    )

};

export default ContactsList;