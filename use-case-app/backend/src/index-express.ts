import "reflect-metadata"
import express, { Request, Response } from 'express';
import cors from 'cors';
import { dataSource } from './config/db';

const app = express();

const port: number = 3001;

app.use(cors({
  origin: 'http://localhost:3000'
}))
app.use(express.json());


app.listen(port, () => {
  dataSource.initialize();
  console.log(`Server started at http://localhost:${port}`);
});