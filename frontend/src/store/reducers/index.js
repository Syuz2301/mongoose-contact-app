import { combineReducers } from "redux";
import { contactsReducer } from "./contacts";


export default combineReducers({
    contacts: contactsReducer
});