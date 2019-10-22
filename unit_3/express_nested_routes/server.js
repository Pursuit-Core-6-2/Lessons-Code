const express = require('express');
const app = express();
const port = 3000;

const productsRouter = require('./routes/products.js')
const userRouter = require('./routes/user.js')

const ordersRouter = require('./routes/orders.js')
const reviewsRouter = require('./routes/reviews.js')

// Router middleware handling all requests coming
// to /products. No matter what method
app.use("/products", productsRouter)

app.use("/users", userRouter)
app.use("/orders", ordersRouter)
app.use("/reviews", reviewsRouter)


app.listen(port, () => {
  console.log(`Listening on port ${port}!`)
});
