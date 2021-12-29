import './App.css';
import React, { useState, useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsThunk } from './store/actions/contact';
import { selectContact } from './store/selectors/contacts';
import ContactsList from './components/ContactsList';
import ContactsForm from './components/ContactsForm';


function App() {
  const [contact, setContact] = useState({ id: '', name: '', phone: ''});
  const dispatch = useDispatch();
  const datas = useSelector(selectContact);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, []);

  return (
    <div className="App">
      <ContactsForm data={{contact, setContact}}/>
      <ContactsList datas={datas} data={{contact, setContact}}/>
    </div>
  );
}

export default App;
