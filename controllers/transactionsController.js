import { Transaction } from '../models/transactionModel.js'

export const getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find()

        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Server Error"
        })
    }
}

export const addTransaction = (req, res, next) => {
    res.send('Post transations')
}


export const deleteTransactions = (req, res, next) => {
    res.send('Delete transations')
}