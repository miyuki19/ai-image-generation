import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import connectDB from '../db/connect.js'
import postRoutes from '../routes/post.js'
import dalleRoutes from '../routes/dalle.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json({ limit: '50mb' }))

app.use('/api/v1/post', postRoutes)
app.use('/api/v1/dalle', dalleRoutes)

const startServer = async () => {
  //connect to DB
  try {
    connectDB(process.env.MONGODB_URL)
    const PORT = process.env.PORT || 8000
    app.listen(PORT, () => {
      console.log(`Server has started on port ${PORT}`)
    })
  } catch (err) {
    console.log(err)
  }
}

startServer()
