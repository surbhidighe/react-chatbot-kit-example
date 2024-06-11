import { useState } from "react";
import ChatBotComponent from "./components/chatbot/Chatbot";

const App = () => {
  const [messagesList, setMessagesList] = useState([]);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <ChatBotComponent
              setMessagesList={setMessagesList}
              messagesList={messagesList}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
