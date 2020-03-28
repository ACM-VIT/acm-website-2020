import React from 'react';

const ChatBot = () => {
  return(
    <iframe
      allow="microphone;"
      title="ChatBot"
      width="350"
      height="430"
      src="https://console.dialogflow.com/api-client/demo/embedded/acm-faq"
    />
  );
};

export default ChatBot;