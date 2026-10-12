import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());


interface Task {
     text: string;
     id: string;
     createdAt: string;
}

const tasks: Task[] = [];

app.post('/api/tasks', (req, res) => {
     const { text } =  req.body;

     if(!text){
          return res.status(400).json({ error: 'Task text required'});
     }
     const task: Task = {
          text, 
          id: Date.now().toString(),
          createdAt: new Date().toISOString(),
     };
     tasks.push(task);
     console.log(`Taskk received: ${text}`);
     res.json(task);
})

const PORT = 3001;
app.listen(PORT, () => {
     console.log(`Backend running on http://localhost:${PORT}`);
});
