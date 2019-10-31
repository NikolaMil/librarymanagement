import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { SearchBooksComponent } from '../search-books/search-books.component';
import { Category } from '../model/category';
import { Language } from '../model/language';

import { MatDialogRef } from '@angular/material';

import { BookManagementService } from '../service/book-management.service';
import { NotificationService } from '../service/notification.service';
import { CategoryManagementService } from '../service/category-management';
import { LanguageManagementService } from '../service/language-management';

import { Book } from './../model/book';
import { User } from '../model/user';



@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  public categories: Category[] = [];
  public languages: Language[] = [];

  public disableISBN = true;

  message: string = null;

  @Input() user: User;
  @Input() book: Book;

  constructor(
    public service: BookManagementService,
    public notificationService: NotificationService,
    public categoryManagementService: CategoryManagementService,
    public languageManagementService: LanguageManagementService,
    private router: Router,
    public dialogRef: MatDialogRef<SearchBooksComponent> ) { }

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

onSubmit() {
    this.service.editBook(this.service.form.value).subscribe(
      data => {
        this.message = data;
        if (this.message.includes('Success All was successful')) {
          this.notificationService.success(this.message);
          this.service.submitted = true;
          this.onClose();
        } else {
          this.notificationService.error(this.message);
        }
      },
    );
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

  onClose() {
    this.dialogRef.close();
  }
}
