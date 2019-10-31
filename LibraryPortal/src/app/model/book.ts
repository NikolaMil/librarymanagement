export class Book {
    id: number;
    isbn: number;
    title: string;
    author: string;
    category: string;
    publishYear: string;
    numberAvailable: number;
    publisher: string;
    language: string;
    image: string;
    bookSummary: string;

    constructor(id: number, isbn: number, title: string,
                author: string, category: string,
                publishYear: string, numberAvailable: number,
                publisher: string, language: string,
                image: string, bookSummary: string) {

        this.id = id;
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.category = category;
        this.publishYear = publishYear;
        this.numberAvailable = numberAvailable;
        this.publisher = publisher;
        this.language = language;
        this.image = image;
        this.bookSummary = bookSummary;
    }
}
