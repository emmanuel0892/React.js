const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {

  const nombres = props.parts.map(n => n.name)
  const cant = props.parts.map(c => c.exercises)

  return (
    <>
      <div>
        <Part nombres={nombres} cant={cant} />
      </div>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.nombres[0]} {props.cant[0]}
      </p>
      <p>
        {props.nombres[1]} {props.cant[1]}
      </p>
      <p>
        {props.nombres[2]} {props.cant[2]}
      </p>
    </>
  )
}

const Total = (props) => {

  const exercises = props.parts.map(p => p.exercises)
  
  return (
    <>
      <p>Number of exercises {parseInt(exercises[0] + exercises[1] + exercises[2])} </p>
    </>
  )
}

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using prps to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>

      <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts}/>
      </div>

    </>
  );
}

export default App;
