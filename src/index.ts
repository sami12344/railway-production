import express, { Application, Request, Response } from 'express'

const app: Application = express()

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world ts')
})

app.listen(5000, () => {
  console.log('Server running at http://localhost:5000')
})
