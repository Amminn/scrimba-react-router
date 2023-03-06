import { useState } from 'react'

function App() {
  const [test, setTest] = useState('state')

  return (
    <h1>{test}</h1>
  )
}

export default App
