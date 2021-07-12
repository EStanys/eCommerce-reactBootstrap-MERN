import express from 'express'
import dotenv from 'dotenv'
import { notFound, errHandler } from './middleware/middleware.js';
import connectDB from './config/db.js'


import productRoutes from './routes/productRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send("api is running!!")
})

app.use('/api/products', productRoutes)

// will use err handling if req pages isn't valid(doesn't exist in above) 
app.use(notFound)

// all other err 
app.use(errHandler);

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`))