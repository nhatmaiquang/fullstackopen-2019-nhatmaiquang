import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = (props) => {
  if (props.text === "positive") {
    return (
      <div>{props.text} {props.value}%</div>
    );
  }
  return(
    <div>
      <div>{props.text} {props.value}</div>
    </div>
  );
}

const Button = (props) => {
  return(
    <button onClick={props.handleClick}>{props.text}</button>
  );
}

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad;
  const average = (props.good - props.bad)/(props.good + props.neutral + props.bad);
  const positive = 100*props.good/(props.good + props.neutral + props.bad);

  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <div>No feedback given</div>
    );
  }

  return(
    <div>
      <Statistic text="good" value ={props.good} />
      <Statistic text="neutral" value ={props.neutral} />
      <Statistic text="bad" value ={props.bad} />
      <Statistic text="all" value ={all} />
      <Statistic text="average" value ={average} />
      <Statistic text="positive" value ={positive} />
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
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  );
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)