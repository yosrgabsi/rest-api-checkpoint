import React, { useState } from 'react';
import './AddContact.css';
import { useNavigate } from 'react-router';
import { postContact } from '../../api/contactApi';

const AddContact = () => {
  const navigate = useNavigate();
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [Age, setAge] = useState('0');
  const [Address, setAddress] = useState('');

  const handleAdd = async () => {
    const contact = {
      firstName: FirstName,
      lastName: LastName,
      email: Email,
      age: Age,
      address: Address,
    };
    await postContact(contact);
    navigate('/contact');
  };

  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="card-image">
            <h2 className="card-heading">
              Get started
              <small>Let us create your contact</small>
            </h2>
          </div>
          <form className="card-form">
            <div className="input">
              <input
                type="text"
                className="input-field"
                defaultValue="Alexander Parkinson"
                required=""
                value={FirstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <label className="input-label">Full name</label>
            </div>
            <div className="input">
              <input
                type="text"
                className="input-field"
                defaultValue="vlockn@gmail.com"
                required=""
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="input-label">Email</label>
            </div>
            <div className="input">
              <input
                type="password"
                className="input-field"
                required=""
                value={Age}
                onChange={(e) => setAge(e.target.value)}
              />
              <label className="input-label">Age</label>
            </div>
            <div className="action">
              <button
                type="button"
                className="action-button"
                onClick={handleAdd}
              >
                Get started
              </button>
            </div>
          </form>
          <div className="card-info">
            <p>
              By signing up you are agreeing to our{' '}
              <a href="#">Terms and Conditions</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
