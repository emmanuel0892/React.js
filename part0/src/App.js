
function Hello(props) {
  return (
    <>
      <div>
        <p>
          Hello {props.name}, you are {props.age} years old
        </p>
      </div>
    </>
  )
}

function Footer() {
  return (
    <>
      <div>
        greeting app create by <a href="https://github.com/emmanuel0892">Emmanuel Rubio Gaete</a>
      </div>
    </>
  )
}

function App() {

  const name = 'Peter'
  const age  = 10

  return (
    <>
      <h1>Greeting</h1>
      <Hello name="Maya" age={26 + 10}/>
      <Hello name={name} age={age}/>
      <Footer />
    </>
  );
}

export default App;
