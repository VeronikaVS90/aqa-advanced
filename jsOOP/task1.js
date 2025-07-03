import Book from "./Book";
import EBook from "./EBook";

// Creating the books
const book1 = new Book('The Alchemist', 'Paulo Coelho', 1988);
const book2 = new Book('1984', 'George Orwell', 1949);
const book3 = new Book('Clean Code', 'Robert C. Martin', 2008);

// Output of information
book1.printInfo();
book2.printInfo();
book3.printInfo();

// Create the EBook
const ebook1 = new EBook('Digital Fortress', 'Dan Brown', 1998, 'PDF');
ebook1.printInfo();

// Changing the values through the setters
ebook1.fileFormat = 'EPUB';
ebook1.title = 'Inferno';
ebook1.printInfo();

// Static method: the oldest book
const allBooks = [book1, book2, book3, ebook1];
const oldestBook = Book.getOldestBook(allBooks);
console.log('Oldest book:');
oldestBook.printInfo();

// Static metod: creating the Ebook from the Book
const ebookFromBook = EBook.createFromBook(book1, 'MOBI');
ebookFromBook.printInfo();