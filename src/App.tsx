import { useState } from 'react'
import axios from 'axios';
import { VoiceInput }from './Components/VoiceInput'

function App() {
  const [tasks, setTasks] = useState<any[]> ([])

  const handleTaskSubmit = (text: string) => {
    axios.post('http://localhost:3001/api/tasks', { text })
      .then(response => {
        setTasks([...tasks, response.data])
      })
      .catch(error => console.error(error))
  }

  return (
    <>
      <section id="center">
        <div>
          <h1>Get focused</h1>
          <VoiceInput onTaskSubmit={handleTaskSubmit} /> { }
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <p> Music Playing: </p>
      </section>

      <section id="spacer"></section>
    </>
  )
}

export default App
