import React from 'react';

 const Message = ({message, toggleClass}) => {


// if(message.read){
//   return 'read'
// } else {
//   return 'unread'
// }


const checkReadClass = (message);
const selectedClass = message.selected ? 'selected' : '';
const readClass = (message.read ? 'read' : 'unread');  // ternary
// const readMessage = (message.read ? '')

return(
  <div className={`row message ${readClass}`} onClick= {() => {toggleClass(message) }}>
    <div className="col-xs-1">
      <div className="row">
        <div className="col-xs-2">
          <input type="checkbox" />
        </div>
        <div className="col-xs-2">
          <i className="star fa fa-star-o"></i>
        </div>
      </div>
    </div>
    <div className="col-xs-11">
      <a href="#">
        {message.subject}
      </a>
    </div>
  </div>
)
}
export default Message
