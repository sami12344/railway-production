import express, { Application, Request, Response } from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app: Application = express()

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world ts')
})
const port = process.env.PORT
app.listen(port, () => {
  console.log('Server running at http://localhost:'+port)
})
