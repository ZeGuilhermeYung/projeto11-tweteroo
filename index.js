import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const users = [];
const tweets = [];

app.post('/sign-up', (req, res) => {
  const user = req.body;
  users.push(user);
  res.send(console.log("OK"));
});

app.get('/sign-up', (req, res) => {
  res.send(users);
});

app.post('/tweets', (req, res) => {
  const tweet = req.body;
  tweets.push(tweet);
  res.send(console.log("OK"));
});

app.get('/tweets', (req, res) => {
  res.send(tweets);
});

app.listen(5000);