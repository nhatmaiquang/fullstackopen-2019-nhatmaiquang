import React from 'react';

const Part = (props) => {
    return (
      <div>
        <div>Content: {props.name}</div>
        <div>Excercises: {props.exercises}</div>
      </div>
    );
}

export default Part;