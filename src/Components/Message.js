import React from 'react';

    const Message = ({ message, toggleClass }) => {
    const selectedClass = message.selected ? 'selected' : ''
    const readClass = message.read ? 'read' : 'unread'
    const starredClass = message.starred ? 'fa-star' : 'fa-star-o'
    const checkedClass = message.checked ? 'checked' : ''
    const subject = message.subject

    const labels = message.labels.map((label, idx) => (
      <span key= {idx} className= "label label-warning">{label}</span>
    ))

    let selector = '';

    if (message.selected === true){
      selector = 'checked'
    }

  // return (
  //   <div className= {`row message ${selectedClass} ${readClass}`}>
  //     <div className="col-xs-1">
  //       <div className="row">
  //
  //         <div className="col-xs-2">
  //           <input
  //             type="checkbox"
  //             checked={`${selector}`} // defaulting to no boxes checked
  //             //readOnly= {true}   // ??
  //             onClick={() => {
  //              toggleClass(message, 'selected')
  //             }}
  //           />
  //         </div>
  //         <div
  //           className="col-xs-2"
  //           onClick={() => {
  //             toggleClass(message, 'starred')
  //           }}
  //         >
  //           <i className={`star fa ${starredClass}`} />
  //         </div>
  //       </div>
  //     </div>


//       <Route path={`/messages/id`} render={() => (  // think if statement
//       <Link className="col-xs-11" to = "/">  // to change the url
//      onClick= {() => {
//         toggleClass(message, 'read')}}
//         {labels}
//         {subject}
//       </Link>
//   )}
// />
  // <Route path="/" render={() => (  // think if statement
  //   <Link className = "col-xs-11" to = "/:id">  // to change the url
  //   </Link>
  // )}
  //   />
})


export default Message;
