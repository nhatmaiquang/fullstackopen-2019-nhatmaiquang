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
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content name={parts[0].name} excercises={parts[0].exercises}/>
      <Content name={parts[1].name} excercises={parts[1].exercises}/>
      <Content name={parts[2].name} excercises={parts[2].exercises}/>
      <Total excercises={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    </div>
  )
}



ReactDOM.render(<App />, document.getElementById('root'))
