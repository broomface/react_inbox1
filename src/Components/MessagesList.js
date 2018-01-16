import React from 'react';
import Message from './Message';


const MessagesList = ({messages, toggleClass}) => {
  return (
<div>
  {messages.map(message => <Message key={message.id} message={message} toggleClass= {toggleClass}/>)}
 // mapping over all messages, giving them an id (of index) and displaying

</div>
  )
}

export default MessagesList
