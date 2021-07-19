import express from 'express'
import dotenv from 'dotenv'
import { notFound, errHandler } from './middleware/middleware.js';
import connectDB from './config/db.js'


import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json()) // accepts json in the request body

app.get('/', (req, res) => {
  res.send("api is running!!")
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes); 

app.get('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID));

// will use err handling if req pages isn't valid(doesn't exist in above) 
app.use(notFound)

// all other err 
app.use(errHandler);

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`))