import types from '../actionTypes/contact';


export const getContacts = (data) => {
    return {
        type: types.GET_CONTACTS,
        payload: data
    };
};

export const createContact = (data) => {
    return {
        type: types.CREATE_CONTACT,
        payload: data
    };
};

export const deleteContact = (data) => {
    return {
        type: types.DELETE_CONTACT,
        payload: data
    };
};

export const fillContactFields = (data) => {
    return {
        type: types.FILL_CONTACT_FIELDS,
        payload: data
    };
};

export const updateContact = (data) => {
    return {
        type: types.UPDATE_CONTACT,
        payload: data
    };
};