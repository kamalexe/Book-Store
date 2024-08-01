import express from 'express';
import { getFreeBooks,getBook } from '../controller/book.controller.js';

const bookRouter = express.Router();

bookRouter.get('/', getBook);
bookRouter.get('/free', getFreeBooks);

export default bookRouter;