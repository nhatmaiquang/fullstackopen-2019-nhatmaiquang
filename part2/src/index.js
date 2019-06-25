import React from 'react';
import ReactDOM from 'react-dom';
import Course from './components/Course';

const Total = (props) => {

  const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises;

  return (
    <div>Total exercises: {total}</div>
  );
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}



ReactDOM.render(<App />, document.getElementById('root'))
