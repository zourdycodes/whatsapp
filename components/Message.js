import moment from "moment";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { auth } from "../firebase";

function Message({ user, message }) {
  const [userLoggedIn] = useAuthState(auth);

  const TypeOfMessage = user === userLoggedIn.email ? Sender : Receiver;

  return (
    <Container>
      <TypeOfMessage>
        {message.message}
        <Timestamp>
          {message.timestamp ? moment(message.timestamp).format("LT") : "..."}
        </Timestamp>
      </TypeOfMessage>
    </Container>
  );
}

export default Message;

const Container = styled.div``;
const MessageElement = styled.p`
  width: fit-content;
  padding: 15px;
  padding-right: 8px;
  border-radius: 8px;
  margin: 10px;
  min-width: 60px;
  padding-bottom: 20px;
  position: relative;
  text-align: center;
`;

/**
 * ! THIS IS HOW TO DIFFERENTIATE THE SENDER AND RECEIVER COLOR TEXT ELEMENT
 * * extend the style of (MessageElement)
 * * create variables TypeOfMessage
 * *
 */

const Sender = styled(MessageElement)`
  margin-left: auto;
  background-color: #4a1c40;
  color: white;
`;

const Receiver = styled(MessageElement)`
  background-color: #206a5d;
  color: white;
  text-align: left;
`;

const Timestamp = styled.span`
  color: whitesmoke;
  padding: 7px;
  padding-right: 10px;
  font-size: 9px;
  position: absolute;
  bottom: 0;
  text-align: right;
  right: 0;
`;
