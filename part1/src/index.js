import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad;
  const average = (props.good - props.bad)/(props.good + props.neutral + props.bad);
  const positive = 100*props.good/(props.good + props.neutral + props.bad);

  return(
    <div>
      <h2>statistics</h2>
      <div>good {props.good}</div>
      <div>neutral {props.neutral}</div>
      <div>bad {props.bad}</div>
      <div>all {all}</div>
      <div>average {average}</div>
      <div>positive {positive} %</div>
    </div>
  );
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={ () => setGood(good + 1)}>
        Good
      </button>
      <button onClick={ () => setNeutral(neutral + 1)}>
        Neutral
      </button>
      <button onClick={ () => setBad(bad + 1)}>
        Bad
      </button>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  );
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)