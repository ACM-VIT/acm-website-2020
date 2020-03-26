import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import { ReactComponent as Instagram } from '../../vectors/Instagram.svg';
import { ReactComponent as Facebook } from '../../vectors/Facebook.svg';
import { ReactComponent as Email } from '../../vectors/Email.svg';
import { ReactComponent as Twitter } from '../../vectors/Twitter.svg';

import SocialLink from './SocialLink.component';


{/*const useStyles = makeStyles({
  root: {
    position: 'absolute',
    width: '400px',
    height: '0px',
    color: '#0085B9',
    paddingTop: '3rem',
    paddingBottom: '3rem',
  },
});*/}

const ContactCard = () => {

  {/*const classes = useStyles();*/}

  const [socialLinks] = useState([
    { id: 1, logo: <Instagram />, handle: '@acmvit' },
    { id: 2, logo: <Facebook />, handle: '@acmvit' },
    { id: 3, logo: <Email />, handle: '@acmvit' },
    { id: 4, logo: <Twitter />, handle: '@acmvit' }
  ]);

  const [contactDetails, setContactDetails] = useState([
    {
      name: '',
      email: '',
      text: ''
    }
  ]);

  const {
    name,
    email,
    text
  }= contactDetails;

  const onChange = e => 
  setContactDetails({...contactDetails,[e.target.name]:e.target.value});


  return (
    <div className="flex justify-center mb-4 py-4">
      <div className="shadow-card w-2/3 rounded-lg flex p-4 py-8">
        <div className="w-1/3 bg-acm-blue text-white relative shift-left px-6 py-4 shadow-card rounded-lg">
          <div className="text-4xl">Reach us at</div>
          {socialLinks.map(social => (
            <SocialLink logo={social.logo} key={social.id}>
              {social.handle}
            </SocialLink>
          ))}
        </div>
        <div>
          <div className="w-full text-4xl">Contact Us</div>
          <form autoComplete="off">
            <TextField 
              id="standard-basic" 
              label="Name"
              name='name' 
              value={name} 
              onChange={e => onChange(e)} 
            />
            <br />
            <TextField 
              id="standard-basic" 
              label="Email" 
              name='email'
              value={email} 
              onChange={e => onChange(e)}
            />
            <br />
            <TextField 
              id="standard-basic" 
              label="Text" 
              name='text'
              value={text} 
              onChange={e => onChange(e)}
            />
            <br />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
