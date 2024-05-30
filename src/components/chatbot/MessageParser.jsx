import React from "react";
import { useEffect } from "react";

const MessageParser = ({ children, actions }) => {
 
  const parse = (message) => {
    actions.handleUserMessage(message);
    actions.setActivity(message)
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
