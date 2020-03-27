import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';

// Components
import SocialLink from './SocialLink.component';
import SendButton from './SendButton';

// Data
import { SOCIAL_LINKS } from '../../DataStore';

const ContactCard = () => {
  const [socialLinks] = useState(SOCIAL_LINKS);
  const [contactDetails, setContactDetails] = useState({
    name: '',
    email: '',
    message: ''
  });

  const { name, email, message } = contactDetails;

  const onChange = e => {
    setContactDetails({ ...contactDetails, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();

    const emptyContacts = {
      name: '',
      email: '',
      message: ''
    };

    axios.defaults.baseURL = 'https://acm-vit-nodemail.herokuapp.com';
    axios
      .post('/api/sendMail', {
        name: contactDetails.name,
        email: contactDetails.email,
        message: contactDetails.message
      })
      .then(response => {
        // eslint-disable-next-line no-alert
        alert(response.data.message);
        setContactDetails(emptyContacts);
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };

  return (
    <div className="container flex justify-center mx-auto">
      <div className="w-full md:w-160 rounded-lg flex shadow-card rounded-lg flex flex-col-reverse md:flex-row mx-8 sm:mx-40 p-4 py-8">
        <div className="bg-acm-blue text-white relative flex flex-col justify-between md:-left-64 px-6 py-4 shadow-card rounded-lg">
          <div className="text-4xl text-center md:text-left">Reach us at</div>
          <div className="flex flex-col justify-center items-center md:mb-8">
            {socialLinks.map(social => (
              <SocialLink logo={social.logo} url={social.url} key={social.id}>
                {social.handle}
              </SocialLink>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col justify-star my-4">
          <div className="w-full text-4xl text-center md:text-left">
            Contact Us
          </div>
          <form autoComplete="off" className="my-auto" onSubmit={onSubmit}>
            <div className="my-8 flex justify-center md:justify-start">
              <TextField
                id="standard-basic"
                label="Name"
                name="name"
                value={name}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="my-8 flex justify-center md:justify-start">
              <TextField
                id="standard-basic"
                label="Email"
                name="email"
                value={email}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="my-8 flex justify-center md:justify-start">
              <TextField
                id="standard-basic"
                label="Text"
                name="message"
                value={message}
                onChange={e => onChange(e)}
              />
            </div>
            <SendButton />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
