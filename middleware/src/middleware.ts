import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
const port = process.env['PORT']

app.get('/', (req: Request, res: Response) => {

    if (!req) {
        res.status(204).send('You must send in a request. Sorry!')
    }

    if (!req.body) {
        res.status(204).send('Your request must not be empty. Sorry!')
    }

    const str = String(req.body)

    /**
   * TODO Cleanup or Prompt Optimization.
   * Note: this is going to be highly dependent on what we end up doing
   * for our ML model in python. I find it very unlikely we can generate good
   * input agnostic to the model itself.
   */


    // Uncomment this when you wish to use it. eslint rules (you may disable)
    // console.log(str)
    res.send('REQUEST TO FLASK:' + str)
})


// TODO: Track to see when a user inputs text into the chatbox
app.listen(port, () => {
    // console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})



