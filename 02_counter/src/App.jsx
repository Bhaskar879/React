import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //hooks
  const [counter , setCounter] = useState(15);

  // let counter = 5;

  const addValue = () => {
    // console.log("Clicked ", counter);
    // counter = counter + 1;
    // if(counter < 20)
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // setCounter(counter + 1)    //it thinks same code is hppening. So, make a bundle and do single work
      // setCounter(counter + 1)   //here after executing 4 lines value increase by one only
      setCounter((prevCounter) => prevCounter + 1)
      setCounter((prevCounter) => prevCounter + 1)
      setCounter((prevCounter) => prevCounter + 1)
      setCounter((prevCounter) => prevCounter + 1)  //here after executing 4 lines value increase by 4
  }

  const removeValue = function(){
    // if(counter > 0)
    setCounter(counter - 1)
  }

  return (
    <>
     <h1>Chai aur react</h1>
     <h2>Counter value: {counter}</h2>

     <button onClick={addValue} >Add value</button>
     <br />
     <button onClick = {removeValue}>Remove value</button>
    </>
  )
}

export default App
