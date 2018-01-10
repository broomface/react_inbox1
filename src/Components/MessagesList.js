import React from 'react';
import Message from './Message';


const MessagesList = ({messages, toggleClass}) => {
  return (
<div>
  {messages.map(message => <Message key={message.id} message={message} toggleClass= {toggleClass}/>)} // messages is a prop
</div>
  )
}

export default MessagesList
