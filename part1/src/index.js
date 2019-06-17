import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <div>Course:</div>
      <div>{props.course}</div>
    </div>
  );
}

const Content = (props) => {
  return (
    <div>
      <div>Content:</div>
      <div>{props.name}</div>
      <div>Excercises:</div>
      <div>{props.excercises}</div>
    </div>
  );
}

const Total = (props) => {
  return (
    <div>
      <div>Total excercises:</div>
      <div>{props.excercises}</div>
    </div>
  );
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content name={part1.name} excercises={part1.exercises}/>
      <Content name={part2.name} excercises={part2.exercises}/>
      <Content name={part3.name} excercises={part3.exercises}/>
      <Total excercises={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}



ReactDOM.render(<App />, document.getElementById('root'))
