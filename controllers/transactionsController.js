import { Transaction } from '../models/transactionModel.js'

export const getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find()

        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        })

    } catch (err) {
        return res.status(500).json({
            success: false,
            err: "Server Error"
        })
    }
}

export const addTransaction = async (req, res, next) => {
    try {
        const { text, amount } = req.body

        const transaction = await Transaction.create(req.body)

        return res.status(201).json({ success: true, data: transaction })
    } catch (err) {
        if (err.name === 'ValidationError') {
            const message = Object.values(err.errors).map(val => val.message)
            return res.status(400).json({
                success: false,
                error: message
            })
        } else {
            return res.status(500).json({
                success: false,
                err: "Server Error"
            })
        }
    }

}


export const deleteTransactions = async (req, res, next) => {
    try {
        const transaction = await Transaction.findByIdAndDelete(req.params.id)

        return res.status(200).json({ success: true, data: {} })
    } catch (err) {
        if (err.name === 'CastError') {
            return res.status(404).json({ success: false, err: "No transaction Found" })
        } else {
            return res.status(500).json({ success: false, err: "Server Error" })
        }

    }
}