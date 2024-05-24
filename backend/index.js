const express = require('express');
	
const userRoutes = require('./routes/userRoute');
const productRoutes = require('./routes/productRoute');
const cartRoutes = require('./routes/cartRoute');
const orderRoutes = require('./routes/orderRoute');
const checkoutRoutes = require('./routes/checkoutRoute');

const { handle404, handle500 } = require('./middlewares/errorHandle');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);
app.use('/order', orderRoutes);
app.use('/checkout', checkoutRoutes);

app.use(handle404);
app.use(handle500);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
