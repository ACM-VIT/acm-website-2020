/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';

const ChatBot = () => {
  useEffect(() => {
    ((d, m) => {
      const kommunicateSettings = {
        appId: '2f2b729288c723e04d231ae647afbd436',
        popupWidget: true,
        automaticChatOpenOnNavigation: true
      };
      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://widget.kommunicate.io/v2/kommunicate.app';
      const h = document.getElementsByTagName('head')[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  });

  return <div />;
};

export default ChatBot;
