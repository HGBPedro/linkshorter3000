import mongoose from 'mongoose'
import logger from '../pino-pretty'

function connect() {
  if (!process.env.MONGODB_CONN) return logger.error('Connection URL not found')
  const MONGOCONN: string = process.env.MONGODB_CONN

  return mongoose.connect(MONGOCONN, {})
    .then(() => {
      logger.info('Database connect')
    })
    .catch((error) => {
      logger.error(error)
      process.exit(1)
    })
}

export default connect
