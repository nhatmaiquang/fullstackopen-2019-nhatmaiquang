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
      <div>{props.part}</div>
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part={part1} excercises={exercises1}/>
      <Content part={part2} excercises={exercises2}/>
      <Content part={part3} excercises={exercises3}/>
      <Total excercises={exercises1 + exercises2 + exercises3} />
    </div>
  )
}



ReactDOM.render(<App />, document.getElementById('root'))
