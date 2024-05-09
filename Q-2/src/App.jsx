import { useState } from 'react'
import Counter from './Counter'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Style.css'

function App() {
  const [count, setCount] = useState(0)

  const Increment = () => {
    setCount(count + 1)
  }

  const Decrement = () => {
    setCount(count - 1)
  }

  const Reset = () => {
    setCount(0)
  }

  return (
    <Counter
      no={count}
      plus={Increment}
      minus={Decrement}
      reset={Reset} />
  )
}

export default App
