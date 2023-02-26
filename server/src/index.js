import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import connectDB from '../db/connect.js'
import postRoutes from '../routes/post.js'
import dalleRoutes from '../routes/dalle.js'

dotenv.config()

const app = express()
const PORT = 8000
app.use(cors())
app.use(express.json({ limit: '50mb' }))

app.use('/api/v1/post', postRoutes)
app.use('/api/v1/dalle', dalleRoutes)

app.get('/', async (req, res) => {
  res.send('Hello from DALL-E!')
})

const startServer = async () => {
  //connect to DB
  try {
    connectDB(process.env.MONGODB_URL)
    app.listen(PORT, () => {
      console.log('Server has started on port http://localhost:8000')
    })
  } catch (err) {
    console.log(err)
  }
}

startServer()
