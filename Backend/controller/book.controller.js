import Book from "../model/book.model.js"

export const getBook=async(req,res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
        } catch (error) {
     console.error(error);  
     console.error('Error fetching books:', error);  
     res.status(500).json({ error: 'An error occurred while fetching books.' });
    }
};


export const getFreeBooks = async (req, res) => {
    try {
      // Query for books where category is 'free'
      const freeBooks = await Book.find({ category: 'free',price:0 });
  
      // Send the response with the free books
      if (freeBooks.length === 0) {
        return res.status(404).json({ message: 'No free books available.' });
      }
      res.status(200).json(freeBooks);
    } catch (error) {
      console.error('Error fetching free books:', error);
      res.status(500).json({ error: 'An error occurred while fetching free books.' });
    }
  };