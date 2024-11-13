import './App.css'
import Card from './components/card'


function App() {
/*
  let myObj = {
    username: "hitesh",
    age: 21
  }
  let newArr = [1, 2, 3]
*/
  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>

      <Card username="chaiAurCode" btnText="Click Me"/>
      <Card username="hitesh"  />

    </>
  )
}

export default App
