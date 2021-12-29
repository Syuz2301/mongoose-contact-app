import { createContact, deleteContact, getContacts, updateContact, fillContactFields } from "../actionCreators/contact";


export const getContactsThunk = () => {
    return async (dispatch) => {
        const resp = await fetch('/api/contacts');
        const contacts = await resp.json();
        return dispatch(getContacts(contacts));
    };
};


export const createContactsThunk = ({contact, setContact}) => {
   return async (dispatch) => {
    const resp = await fetch('/api/contacts', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            contact: {
                id: contact._id,
                name: contact.name,
                phone: contact.phone
            }
        })
    });
    const result = await resp.json();
    setContact({ name:'', phone:''});
    if(!result.msg) {  
        return dispatch(createContact(result));
    }
   };
};


export const deleteContactThunk = (id) => {
   return async (dispatch) => {
        await fetch(`/api/contacts/${id}`, {
        method: "DELETE",
    });
    return dispatch(deleteContact(id));
   };
};


export const contactFieldsThunk = (id, {setContact}) => {
    return async (dispatch) => {
        const resp = await fetch(`/api/contacts/${id}`)
        const res = await resp.json(); 
        setContact({
            id: res._id,
            name: res.name,
            phone: res.phone
        });
        return dispatch(fillContactFields(id));
    };
};



export const updateContactThunk = ({contact, setContact}) => {
    return async (dispatch) => {
     const resp = await  fetch(`/api/contacts/${contact.id}`, {
         method: 'PUT',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify({
            contact: {
                id: contact.id,
                name: contact.name,
                phone: contact.phone,
              }
         })
     });
     const result = await resp.json();
     setContact({name:'', phone:''});
     return dispatch(updateContact(result));
    };
 };
 
 

