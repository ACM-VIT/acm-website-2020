import axios from 'axios';

// Base URL
axios.defaults.baseURL = 'https://acm-vit-nodemail.herokuapp.com';

const sendMail = (name, email, message) =>
  axios.post('/api/sendMail', {
    name,
    email,
    message
  });

export default sendMail;
