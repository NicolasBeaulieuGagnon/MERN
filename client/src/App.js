import React, { useEffect, useState } from "react";
import "./App.css";
import CreateMessage from "./CreateMessage";
import Message from "./Message";

const App = () => {
  const [update, setUpdate] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("/posts").then((res) => {
      res.json().then(({ data }) => {
        setMessages(data.reverse());
      });
    });
  }, [update]);

  return (
    <div className="App">
      <CreateMessage update={update} setUpdate={setUpdate} />
      {messages.length > 0 &&
        messages.map((message) => {
          return <Message key={message._id} message={message.message} />;
        })}
    </div>
  );
};

export default App;
