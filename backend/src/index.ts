/**
 * Required External Modules
 */

import * as dotenv from "dotenv"
import express from "express"
import cors from "cors"
import helmet from "helmet"
import { exit } from "process"
import connect from './dbConnection'
import logger from '../pino-pretty'

dotenv.config()

/**
 * App Variables
 */

if (!process.env.PORT) process.exit(1)

const PORT: number = parseInt(process.env.PORT as string, 10)

const app = express()

/**
 *  App Configuration
 */

app.use(cors())
app.use(helmet())
app.use(express.json())

app.use(function(err, req, res, next){
  console.log(err);
 // ‘res.status(422)’->muda o status
 res.status(422).send({error: err.message});
});

/**
 * Server Activation
 */

app.listen(PORT, () => {

  connect()

  console.log('Listening on port ', PORT)
})