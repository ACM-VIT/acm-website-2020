import React from 'react';

const ChatBot = () => {
  return(
    <iframe
      allow="microphone;"
      width="350"
      title="ChatBot"
      height="430"
      src="https://console.dialogflow.com/api-client/demo/embedded/acm-faq"
    />
  );
};

export default ChatBot;