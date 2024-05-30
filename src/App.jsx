import { useState } from "react";
import ChatBotComponent from "./components/chatbot/Chatbot";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";

const App = () => {
  const [messagesList, setMessagesList] = useState([]);
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-3 col-sm-4 shadow">
            <Sidebar messagesList={messagesList} />
          </div>
          <div className="col-lg-10 col-md-9 col-sm-8">
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
