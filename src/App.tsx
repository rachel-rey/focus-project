import { useState } from 'react'
import axios from 'axios';
import { VoiceInput }from './Components/VoiceInput';
import { TaskCard } from './Components/TaskCard';

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
        <div>
          <button
            onClick={() => console.log("YOu ckucje it")}
            className='p-2 bg-emerald-900 hover:bg-emerald-950 text-white rounded-lg'>
            Submit
          </button>
        </div>
      </section>

      <div className="ticks"></div>
      <div className='mt-9 space-y-4'>
        {tasks.map((task, idx) =>(
          <TaskCard key={idx} task={task} />
        ))}

      </div>

      <section id="next-steps">
        <p> Music Playing: </p>
      </section>

      <section id="spacer"></section>
    </>
  )
}

export default App
