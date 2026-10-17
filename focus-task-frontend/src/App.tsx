import { useState } from 'react'
import { VoiceInput }from './Components/VoiceInput';
import { TaskCard } from './Components/TaskCard';

function App() {
  const [tasks, setTasks] = useState<any[]> ([])
  const handleTaskSubmit = async (text: string) => {
    const response = await fetch('http://localhost:3001/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ task: text}),
    });
    const data = await response.json();
    setTasks((tasks) => [...tasks, data]); // Update the tasks state with the new task.  aka setTasks([...tasks, data]);
    console.log('Task submitted:', text);
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
