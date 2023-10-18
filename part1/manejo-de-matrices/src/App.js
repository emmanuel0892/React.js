import { useState } from "react";

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        The app is used by pressing the button
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}


const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([]) 

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  const handleDropClick = () => {
    setAll([])
    setLeft(0)
    setRight(0)
  }

  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text={'Left'} />
      <Button onClick={handleDropClick} text={'Reset'} />
      <Button onClick={handleRightClick} text={'Right'} />
      {right}
      <History allClicks={allClicks} />
    </div>
  );
}

export default App;
