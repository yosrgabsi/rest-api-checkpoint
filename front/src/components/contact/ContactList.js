import React, { useEffect } from 'react';
import ContactCard from './ContactCard';
import { useSelector, useDispatch } from 'react-redux';
import { setContact } from '../../store/contactSlice';
import { fetchAllContact } from '../../api/contactApi';

const ContactList = () => {
  const contact = useSelector((state) => state.contactElement);
  const dispatch = useDispatch();

  const getAllContact = async () => {
    try {
      const data = await fetchAllContact();
      dispatch(setContact(data.contact));
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  useEffect(() => {
    getAllContact();
  }, []);

  const gotoUpdate = (id) => {
   
  };

  return (
    <div>
      {contact.map((e) => (
        <ContactCard key={e.id} mini={e} getAllContact={getAllContact} gotoUpdate={gotoUpdate} />
      ))}
    </div>
  );
};

export default ContactList;
