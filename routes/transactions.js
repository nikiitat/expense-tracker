import { Router } from 'express'

import { getTransactions, deleteTransactions, addTransaction } from '../controllers/transactionsController.js '

const router = Router()

router
    .route('/')
    .get(getTransactions)
    .post(addTransaction)

router
    .route('/:id')
    .delete(deleteTransactions)

export default router