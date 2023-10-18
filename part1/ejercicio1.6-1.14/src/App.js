import { useState } from "react";

const Title = ({text}) => <div><h1>{text}</h1></div>

const SubTitle = ({text}) => <div><h1>{text}</h1></div> 

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Stadistics = ({text, cant}) => <p>{text} {cant}</p>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }


  return (
    <div>
      <Title text={'give feedback'} />
      <Button onClick={handleGoodClick} text={'good'} />
      <Button onClick={handleNeutralClick} text={'neutral'} />
      <Button onClick={handleBadClick} text={'bad'} />
      <SubTitle text={'statistics'} />
      <Stadistics text={'good'} cant={good} />
      <Stadistics text={'neutral'} cant={neutral} />
      <Stadistics text={'bad'} cant={bad} />
    </div>
  );
}

export default App;
