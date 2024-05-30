import React from "react";
import Loader from "../../assets/Loader";
import { getPromptResponse } from "../../services/chat-service";
import { parseResponseToHTML } from "../../utils/utils";

const ActionProvider = (props) => {
  const { createChatBotMessage, setState, children, setMessagesList } = props;

  const handleUserMessage = (message) => {
    //add loading untill api data gets fetched
    const loading = createChatBotMessage(<Loader />);
    setState((prev) => ({ ...prev, messages: [...prev?.messages, loading] }));

    // get response from api as per the typed input
    getPromptResponse({
      query: "prompt=" + message,
      onSuccess: (res) => {
        let botMsg = <div dangerouslySetInnerHTML={parseResponseToHTML(res)} />;
        const botMessage = createChatBotMessage(botMsg);
        setState((prev) => {
          const newPrevMsg = prev?.messages.slice(0, -1); // Remove Loading here
          return { ...prev, messages: [...newPrevMsg, botMessage] };
        });
      },
      onError: (err) => {
        console.log(err);
        setState((prev) => {
          const newPrevMsg = prev?.messages.slice(0, -1); // Remove Loading here
          return {
            ...prev,
            messages: [...newPrevMsg, "something went wrong!!"],
          };
        });
      },
    });
  };

  const setActivity = (message) => {
    setMessagesList((prev)=>[...prev, message])
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleUserMessage,
            setActivity,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;

