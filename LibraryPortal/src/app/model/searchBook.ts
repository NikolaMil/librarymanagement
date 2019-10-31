export class SearchBook {
    constructor(private title: string,
                private author: string, private category: string,
                private publishYear: string, private language: string, private role: string) {

        this.title = title;
        this.author = author;
        this.publishYear = publishYear;
        this.category = category;
        this.language = language;
        this.role = role;
    }
}
