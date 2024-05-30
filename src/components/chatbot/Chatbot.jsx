import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import { config } from "./config";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import { useEffect, useState } from "react";

const ChatBotComponent = ({messagesList, setMessagesList}) => {

  useEffect(() => {
    document.querySelector(".react-chatbot-kit-chat-input").focus();
  }, [messagesList]);

  return (
    <Chatbot
      config={config}
      messageParser={MessageParser}
      actionProvider={(props) => <ActionProvider setMessagesList={setMessagesList} {...props} />}
    />
  );
};

export default ChatBotComponent;
