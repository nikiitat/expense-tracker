import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI, { autoCreate: false })

        console.log(`MongoDB connected: ${connect.connection.host}`.cyan.underline.bold)
    } catch (err) {
        console.log(`Error: ${err.message}`.red)
        process.exit(1)
    }
}