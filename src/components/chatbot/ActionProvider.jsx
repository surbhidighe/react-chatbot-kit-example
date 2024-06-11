import React from "react";

// ###################### START -----> IN CASE IF BOT MESSAGE COMES FROM API RESPONSE #########################
import Loader from "../../assets/Loader";
import { getPromptResponse } from "../../services/chat-service";
import { parseResponseToHTML } from "../../utils/utils";
// ###################### END -----> IN CASE IF BOT MESSAGE COMES FROM API RESPONSE #########################

const ActionProvider = (props) => {
  const { createChatBotMessage, setState, children } = props;

  // ####################### START -----> CAN USE THIS IF WE WANT TO SET BOT MESSAGE FROM API RESPONSE #################################

  // const handleUserMessage = (message) => {
  //   //add loading untill api data gets fetched
  //   const loading = createChatBotMessage(<Loader />);
  //   setState((prev) => ({ ...prev, messages: [...prev?.messages, loading] }));

  //   // get response from api as per the typed input
  //   getPromptResponse({
  //     query: "msg=" + message,
  //     onSuccess: (res) => {
  //       let botMsg = <div dangerouslySetInnerHTML={parseResponseToHTML(res)} />;
  //       const botMessage = createChatBotMessage(botMsg);
  //       setState((prev) => {
  //         const newPrevMsg = prev?.messages.slice(0, -1); // Remove Loading here
  //         return { ...prev, messages: [...newPrevMsg, botMessage] };
  //       });
  //     },
  //     onError: (err) => {
  //       console.log(err);
  //       setState((prev) => {
  //         const newPrevMsg = prev?.messages.slice(0, -1); // Remove Loading here
  //         return {
  //           ...prev,
  //           messages: [...newPrevMsg, "something went wrong!!"],
  //         };
  //       });
  //     },
  //   });
  // };

  // ################ END ----->

   // ####################### GENERAL WAY #################################
   const handleUserMessage = (message) => {
    const botMessage = createChatBotMessage(`Hello, You typed ------> ${message}`);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleUserMessage,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;

