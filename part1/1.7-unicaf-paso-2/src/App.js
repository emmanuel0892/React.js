import { useState } from "react";

const Title = ({text}) => <div><h1>{text}</h1></div>
const SubTitle = ({text}) => <div><h1>{text}</h1></div> 
const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Stadistics = (props) => {
  const estadisticas = {
    names:[
      'good','neutral','bad','all','average','positive',
    ],
    totals:[
      props.good, props.neutral, props.bad, props.tot, props.prom, props.positv,
    ],
  }

  if (props.tot !== 0) {
    return (
      <>
        <PartStadistics text={'good'} cant={props.good} />
        <PartStadistics text={'neutral'} cant={props.neutral} />
        <PartStadistics text={'bad'} cant={props.bad} />
        <PartStadistics text={'all'} cant={props.tot} />
        <PartStadistics text={'average'} cant={props.prom} />
        <PartStadistics text={'positive'} cant={parseInt(props.positv, '%')} />
        <TablaEstadistic object={estadisticas} />
      </>
    )
  }else{
    return (
      <>
        <p>No feedback given</p>
      </>
    )
  }
}

const TablaEstadistic = ({object}) => {
  return (
    <div>
      <table className="table">
        <tbody>
          <tr>
            <td>{object.names.map(n => n.names)}</td>
            <td>{object.totals.map(t => t.totals)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const PartStadistics = ({text, cant}) => <p>{text} {cant}</p>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [tot, setTot] = useState(0)
  const [prom, setProm] = useState(0)
  const [positv, setPositiv] = useState(0)

  const handleGoodClick = () => {
    const goods = good + 1
    const total = tot + 1
    setGood(goods)
    setTot(total)
    setProm(total/3)
    setPositiv((goods * 100)/total)
  }

  const handleNeutralClick = () => {
    const total = tot + 1
    const neutralf = neutral + 1
    setNeutral(neutralf)
    setTot(total)
    setProm(total/3)
    setPositiv((good * 100)/total)
  }

  const handleBadClick = () => {
    const bads = bad + 1
    const total = tot + 1
    setBad(bads)
    setTot(total)
    setProm(total/3)
    setPositiv((good * 100)/total)
  }
  return (
    <div>
      <Title text={'give feedback'} />
      <Button onClick={handleGoodClick} text={'good'} />
      <Button onClick={handleNeutralClick} text={'neutral'} />
      <Button onClick={handleBadClick} text={'bad'} />
      <SubTitle text={'statistics'} />
      <Stadistics good={good} neutral={neutral} bad={bad} tot={tot} prom={prom} positv={positv} />
    </div>
  )
}

export default App;
