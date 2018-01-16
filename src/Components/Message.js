import React from 'react'

  const Message = ({ message, toggleClass }) => {
  const selectedClass = message.selected ? 'selected' : ''
  const readClass = message.read ? 'read' : 'unread'
  const starredClass = message.starred ? 'fa-star' : 'fa-star-o'
  const checkedClass = message.checked ? 'checked' : ''
  const subject = message.subject
  const labels = message.labels.map((label, idx) => (
    <span key= {idx} className= "label label-warning">{label}</span>
) )

  return (
    <div className= {`row message ${selectedClass} ${readClass}`}
    >
      <div className="col-xs-1">
        <div className="row">

          <div className="col-xs-2">
            <input
              type="checkbox"
              checked={!!message.selected}  // defaulting to no boxes checked
              //readOnly= {true}   // ??
              onClick={() => {
               toggleClass(message, 'selected')
              }}
            />
          </div>
          <div
            className="col-xs-2"
            checked={!!'fa-star'}
            onClick={() => {
              toggleClass(message, 'starred')
            }}
          >
            <i className={`star fa ${starredClass}`} />  // defined above (star)
          </div>
        </div>
      </div>
      <div className="col-xs-11"
      onClick={() => {
        toggleClass(message, 'read')}}>

        {labels}
        {subject} // Both labels and what the message says

      </div>
    </div>
  )
}
export default Message
