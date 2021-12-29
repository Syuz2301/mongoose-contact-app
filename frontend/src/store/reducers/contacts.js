import types from "../actionTypes/contact";


export const contactsReducer = (state={}, action) => {
    switch(action.type) {
        case types.CREATE_CONTACT:
            const allContacts = [...state, action.payload];
            return allContacts;
        case types.GET_CONTACTS:
            return action.payload;
        case types.DELETE_CONTACT:
            return state.filter(item => item._id !== action.payload);
        case types.FILL_CONTACT_FIELDS:
            return state;
        case types.UPDATE_CONTACT:
            const result = [];
            state.forEach((item) => {
                if(item._id === action.payload._id) {
                    item.name = action.payload.name;
                    item.phone = action.payload.phone
                }
                result.push(item);
            }); 
            return result;
        default:
            return state;
    }
};
