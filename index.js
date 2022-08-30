import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const users = [
  {
    username: "bobesponja",
	  avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
  },
  {
    username: "Harry Potter",
    avatar: "https://portalpopline.com.br/wp-content/uploads/2022/08/harry-potter-serie.jpg"
  }
];
const tweets = [
  {
    username: "bobesponja",
    tweet: "eu amo o hub"
  },
  {
    username: "Harry Potter",
    tweet: "num sei"
  }
];

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
  res.send(tweets);
});

app.listen(5000);