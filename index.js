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
  const avatar = users.find(user => user.username === tweet.username).avatar;
  tweets.push(
    {
      username: tweet.username,
      tweet: tweet.tweet,
      avatar: avatar
    }
  );
  res.send(console.log("OK"));
});

app.get('/tweets', (req, res) => {
  res.send(tweets.slice(-10));
});

app.listen(5000);