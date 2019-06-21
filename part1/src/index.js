import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0);

  const [points, setPoints] = useState({0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0});

  // console.log(points);
  // console.log(selected);

  const vote = (index) => {
    const copy = {...points};
    copy[index] += 1;  
    setPoints(copy);
    // console.log(index);
    // console.log(copy);
  }

  const mostVoted = (obj) => {
    let arr = Object.values(obj);
    let max = Math.max(...arr);
    // console.log(`max value: ${max}`);
    // console.log(getKeyByValue(obj, max));
    return getKeyByValue(obj, max);
  }

  function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }
  const randomNumber = () => {
    return ((Math.floor((Math.random() * 6))));
  };
  

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <div>{props.anecdotes[selected]}</div>
      <div>has {points[selected]} votes</div>
      <button onClick={() => vote(selected)}>vote</button>
      <button onClick={() => setSelected(randomNumber())} >next anecdote</button>
      <h2>Anecdote with most votes</h2>
      <div>{props.anecdotes[mostVoted(points)]}</div>
      <div>has {points[[mostVoted(points)]]} votes</div>
    </div>
    
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)