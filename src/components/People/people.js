import React from 'react';

function People(props) {
  return(
    <div>
      {props.person.username}
      {props.person.imageUrl}
      {props.person.jobTitle}
      {props.person.connections}
    </div>
  )
}

export default People;