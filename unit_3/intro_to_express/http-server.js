const http = require("http");

const port = 3000

const requestHandler = (request, response) => {
  console.log(request.method, request.url)



  response.statusCode = 200;

  const name = request.url.slice(1);;

  const user = {
    name: name,
    last: "Doe",
    age: 26
  }

  const jsonData = JSON.stringify(user);

  response.setHeader("Content-Type", "application/json")
  response.setHeader("Access-Control-Allow-Origin", "*")


  if (request.method === 'get' && request.url === '/about-us') {
    response.end(jsonData);
    return;
  }

  if (request.url === '/login') {
    response.end(jsonData);
    return;
  }

  response.end(jsonData);
}

const server = http.createServer(requestHandler);

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
