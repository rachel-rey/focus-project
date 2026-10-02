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
