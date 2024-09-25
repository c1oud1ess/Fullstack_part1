import { useState } from 'react'

const Statistics = ({good, neutral, bad, all, average, positive}) =>{
  if((good+neutral+bad) == 0){
    return(
      <div>
        No feedback given
      </div>
    )
  }else{
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value ={good} />
          <StatisticLine text="neutral" value ={neutral} />
          <StatisticLine text="bad" value ={bad} />
          <StatisticLine text="all" value ={all} />
          <StatisticLine text="average" value ={average} />
          <StatisticLine text="positive" value ={positive} />
        </tbody>
      </table>
    )
  }
}

const StatisticLine = ({text, value}) =>{
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Buttons = ({good, neutral, bad, setg, setn, setb}) =>{
  return(
    <div>
      <Button set={setg} text={"good"} value={good}/>
      <Button set={setn} text={"neutral"} value={neutral}/>
      <Button set={setb} text={"bad"} value={bad}/>
    </div>
  )
}

const Button = ({set, value ,text}) =>{
  return(
    <button onClick={() => set(value+1)}>{text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let all = good+neutral+bad
  let average = all == 0 ? 0 : (good-bad)/all;
  let positive = all == 0 ? 0 : (good*100)/all;

  return (
    <div>
      <h1>give feedback</h1>
      <Buttons good={good} neutral={neutral} bad={bad} setg={setGood} setn={setNeutral} setb={setBad}/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
    </div>
  )
}

export default App