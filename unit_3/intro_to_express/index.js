const express = require('express');
const cors = require('cors');

const app = express();
const port = 8080;

// app.use(cors());
app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*")
  next(res)
});

app.get('/', (req, res) => {
  res.send('This is the home page at /');
});

app.post('/', (req, res) => {
  res.send('Server saw a POST coming at /');
})

app.get('/login', (req, res) => {
  res.set("Content-Type", "text/html");
  res.status(200)

  res.send(`
    <html>
      <body>
        <h1>The login page of the Server for 6.2 is still under construction but you can log-in </h1>
        <input placeholder="username"/>
        <input placeholder="password" type="password"/>
        <button>Login</button>
      </body>
    </html>  
  `);
})

app.get('/about-us', (req, res) => {
  res.send("Welcome to Jonathan's Server 6.2");
})

app.get('/users/:userID', (req, res) => {
  let users = ["Amy", "Bob", "Cat"]

  let userID = req.params.userID

  let data = {
    userID: userID,
    username: users[userID]
  }

  res.status(200)
  res.json(data);

})

app.use("*", (req, res) => {
  res.status(404);
  res.send('This was not found =( 404')
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
