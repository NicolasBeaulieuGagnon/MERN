import React from "react";
import styled from "styled-components";

const Message = ({ message }) => {
  return <Wrapper>{message}</Wrapper>;
};

const Wrapper = styled.div`
  background: rgb(0, 0, 0, 0.1);
  padding: 10px 20px;
  border-radius: 5px;
  margin: 5px;
`;

export default Message;
