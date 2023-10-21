import { useState } from "react";

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>
const Anecdotes = ({anecdotes, selected}) => <div><p>{anecdotes[selected]}</p></div>
const Votos = ({votesNow}) => <div><p>has {votesNow} votes</p></div>

function App() {
  const [selected, setSelected] = useState(0)
  const [votesNow, setVotesNow] = useState(new Array(6).fill(0))

  const handleAnecdotesClick = () => {
    const random = parseInt(Math.random() * 6)
    setSelected(random)
    
  }

  const handleVotesClick = () => {
    const copyVotesNow = [...votesNow]
    copyVotesNow[selected] += 1
    setVotesNow([...copyVotesNow])
  }

  return (
    <div>
        <Anecdotes anecdotes={anecdotes} selected={selected} />
        <Votos votesNow={votesNow[selected]} />
        <Button onClick={handleVotesClick} text={'vote'} />
        <Button onClick={handleAnecdotesClick} text={'next anecdote'} />
    </div>
  );
}

export default App;

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]