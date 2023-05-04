import { useState, useRef } from 'react'
//import Home from './components/Home.jsx'
import Stopwatch from './components/Stopwatch'

function App() {

  // let arr = [1, 2, 3]
  // // let one = arr[0]
  // // let two = arr[1]
  // let [one, two, three] = arr

  // let obj = {
  //   one: 1,
  //   two: 2
  // }

  // let { two } = obj

  let [count, setCount] = useState(0)
  let count2 = useRef(0)

  // useState returns [state, function for updating the state]

  const increment = () => {
    // setCount(count + 1)
    setCount((current)=>{
      return current + 1
    })
  }

  const increment2 = () => {
    count2.current += 1
    console.log(count2.current)
  }


  return (
    <>
      {count} <button onClick={increment}>+</button> <br />
      {/* {count2} <button onClick={increment2}>+</button> <br /> */}
      {/* <Home /> */}
      <Stopwatch />
      
    </>
  )
}

export default App
