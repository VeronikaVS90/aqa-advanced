class Book {
	constructor(title, author, year) {
		this._title = title;
		this._author = author;
		this._year = year;
	}

	get title() {
		return this._title;
	}
	set title(value) {
		if (typeof value !== "string" || value.trim() === "") {
			throw new Error("Invalid title");
		}
		this._title = value;
	}

	get author() {
		return this._author;
	}
	set author(value) {
		if (typeof value !== "string" || value.trim() === "") {
			throw new Error("Invalid author");
		}
		this._author = value;
	}

	get year() {
		return this._year;
	}
	set year(value) {
		if (typeof value !== "number" || value < 0) {
			throw new Error("Invalid year");
		}
		this._year = value;
	}

	printInfo() {
		console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
	}

	static getOldestBook(books) {
		if (!Array.isArray(books) || books.length === 0) {
			return null;
		}
		return books.reduce((oldest, current) =>
			current.year < oldest.year ? current : oldest
		);
	}
}

export default Book;
