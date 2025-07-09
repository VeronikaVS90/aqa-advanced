import Book from "./Book";

class EBook extends Book {
	constructor(title, author, year, fileFormat) {
		super(title, author, year);
		this._fileFormat = fileFormat;
	}

	get fileFormat() {
		return this._fileFormat;
	}
	set fileFormat(value) {
		if (typeof value !== "string" || value.trim() === "") {
			throw new Error("Invalid file format");
		}
		this._fileFormat = value;
	}

	printInfo() {
		console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Format: ${this.fileFormat}`);
	}

	static createFromBook(book, format) {
		if (!(book instanceof Book)) {
			throw new Error("Argument must be an instance of Book");
		}
		return new EBook(book.title, book.author, book.year, format);
	}
}

export default EBook;