import React, { useState } from 'react';

import { ReactComponent as Instagram } from '../../vectors/Instagram.svg';
import { ReactComponent as Facebook } from '../../vectors/Facebook.svg';
import { ReactComponent as Email } from '../../vectors/Email.svg';
import { ReactComponent as Twitter } from '../../vectors/Twitter.svg';

import SocialLink from './SocialLink.component';

const ContactCard = () => {
  const [socialLinks] = useState([
    { id: 1, logo: <Instagram />, handle: '@acmvit' },
    { id: 2, logo: <Facebook />, handle: '@acmvit' },
    { id: 3, logo: <Email />, handle: '@acmvit' },
    { id: 4, logo: <Twitter />, handle: '@acmvit' }
  ]);

  return (
    <div className="flex justify-center mb-4 py-4">
      <div className="contact-shadow w-2/3 shadow-2xl flex p-4 py-8">
        <div className="w-1/3 bg-acm-blue text-white relative reach-us px-6 py-4">
          <div className="text-4xl">Reach us at</div>
          {socialLinks.map(social => (
            <SocialLink logo={social.logo} key={social.id}>
              {social.handle}
            </SocialLink>
          ))}
        </div>
        <div className="w-2/3 text-4xl">Contact Us</div>
      </div>
    </div>
  );
};

export default ContactCard;
