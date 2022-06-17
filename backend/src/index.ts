import * as dotenv from "dotenv"
import express, { NextFunction, Request, Response } from "express"
import cors from "cors"
import helmet from "helmet"
import connect from './dbConnection'
import api from './routes/linksRoutes'
import logger from "../pino-pretty"

dotenv.config()

if (!process.env.PORT) process.exit(1)

const app = express()
const PORT: number = parseInt(process.env.PORT as string, 10)

app.use(cors())
app.use(helmet())
app.use(express.json())

app.use(function(err: Error, req: Request, res: Response, next: NextFunction){
  console.log(err);
 // ‘res.status(422)’->muda o status
 res.status(422).send({error: err.message});
});

app.use('/api', api)

app.listen(PORT, () => {
  connect()

  logger.info(`Listening on port ${PORT}`)
})