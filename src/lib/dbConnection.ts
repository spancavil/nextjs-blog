// getting-started.js
import Mongoose from 'mongoose'

let connection = { isConnected: 0 }

export const dbAtlasConn = async () => {
  try {
    if (connection.isConnected !== 0) {
      console.log('Using existing connection')
      return
    }
    if (!process.env.DB_MONGO_URL)
      throw new Error('No string connection specified')
    const db = await Mongoose.connect(process.env.DB_MONGO_URL || '')
    connection.isConnected = db.connections[0].readyState
  } catch (error) {
    console.log(error)
    throw new Error('Error connecting DB')
  }
}
