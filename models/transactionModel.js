import mongoose from 'mongoose'

const TransactionSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Please add some text']
    },
    amount: {
        type: Number,
        required: [true, 'Please add a number']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export const Transaction = mongoose.model('Transaction', TransactionSchema)