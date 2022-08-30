import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const user = {};

app.post('/sign-up', (req, res) => {
  user = req.body;
  res.send(user);
});

app.get('/sign-up', (req, res) => {
  res.send(user);
});

app.listen(5000);