import { useState } from "react";

const App = () => {
  const [ clicks, setClicks ] = useState({
    left:0, right:0
  })

  const handleLeftClicks = () => 
    setClicks({ ...clicks, left: clicks.left  + 1 })

  const handleRightClicks = () => 
    setClicks({ ...clicks, right: clicks.right + 1 })

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClicks}>Left</button>
      <button onClick={handleRightClicks}>Right</button>
      {clicks.right}
    </div>
  );
}

export default App;
