import React, { useState } from "react";
import styled from "styled-components";

const CreateMessage = ({ update, setUpdate }) => {
  const [message, setMessage] = useState("");

  const postComment = () => {
    message.length > 0 &&
      fetch(`/post/message`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      }).then(() => {
        setUpdate(!update);
        setMessage("");
      });
  };

  return (
    <Wrapper>
      <Input
        value={message}
        onChange={(ev) => setMessage(ev.target.value)}
        type="text"
        placeholder="what's on your mind?"
      />
      <Button onClick={postComment}> Post </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 50px;
  margin-left: 20px;
  position: relative;
  width: 500px;
`;

const Input = styled.textarea`
  width: 500px;
  height: 200px;
  outline: none;
  resize: none;
`;

const Button = styled.button`
  position: absolute;
  bottom: 4px;
  right: -6px;
  padding: 10px 50px;
  cursor: pointer;
  &:active {
    transform: scale(0.95);
  }
  z-index: 20;
`;

export default CreateMessage;
