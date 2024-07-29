import express from 'express';
import { getFreeBooks,getBook } from '../controller/book.controller.js';

const router = express.Router();

router.get('/', getBook);
router.get('/free', getFreeBooks);

export default router;