import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Category } from '../model/category';
import { Language } from '../model/language';

import { BookManagementService } from '../service/book-management.service';
import { CategoryManagementService } from '../service/category-management';
import { LanguageManagementService } from '../service/language-management';

import { Book } from './../model/book';
import { User } from '../model/user';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})

export class BookInfoComponent implements OnInit {
  public categories: Category[] = [];
  public languages: Language[] = [];

  public disableISBN = true;

  message: string = null;

  @Input() user: User;
  @Input() book: Book;

  constructor(
    public service: BookManagementService,
    public categoryManagementService: CategoryManagementService,
    public languageManagementService: LanguageManagementService,
    private router: Router ) { }

  ngOnInit() {
    this.getCategories();
    this.getLanguages();

    if (this.user == null) {
      if (sessionStorage.getItem('user') !== 'null') {
          this.user = JSON.parse(sessionStorage.getItem('user'));
      } else {
          this.router.navigate([`/login`]);
      }
  }
}

getCategories() {
    this.categoryManagementService.getCategories().subscribe(
        data => {
            this.categories = data;
        }
    );
  }

getLanguages() {
    this.languageManagementService.getLanguages().subscribe(
        data => {
            this.languages = data;
        }
    );
  }
}
