import { SharedService } from './service/shared-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule, routing } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddBookComponent } from './add-book/add-book.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { SearchBooksComponent } from './search-books/search-books.component';
import { SearchReservationsComponent } from './search-reservations/search-reservations.component';

import { RegisterService } from './service/register.service';
import { CategoryManagementService } from './service/category-management';
import { LanguageManagementService } from './service/language-management';
import { LoginService } from './service/login.service';
import { BookManagementService } from './service/book-management.service';
import { SearchBooksService } from './service/search-books.service';
import { ReservationManagementService } from './service/reservation-management.service';

import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatIconModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule, MatTableModule } from '@angular/material';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';

import { EditBookComponent } from './edit-book/edit-book.component';
import { EditBookService } from './service/edit-book.service';
import { BookInfoComponent } from './book-info/book-info.component';
import { ConfirmReservationComponent } from './confirm-reservation/confirm-reservation.component';
import { ReturnReservationComponent } from './return-reservation/return-reservation.component';
import { AddReservationComponent } from './add-reservation/add-reservation.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    AddBookComponent,
    MenuComponent,
    SearchBooksComponent,
    SearchReservationsComponent,
    EditBookComponent,
    BookInfoComponent,
    ConfirmReservationComponent,
    ReturnReservationComponent,
    AddReservationComponent
  ],
  entryComponents: [
    BookInfoComponent,
    EditBookComponent,
    ConfirmReservationComponent,
    ReturnReservationComponent,
    AddReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    routing,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTableModule,
    MatAutocompleteModule,
    MatPaginatorModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule,
    FlexLayoutModule
  ],
  exports: [
    MatIconModule,
    MatDialogModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    RegisterService,
    LoginService,
    CategoryManagementService,
    LanguageManagementService,
    BookManagementService,
    SearchBooksService,
    ReservationManagementService,
    EditBookService,
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
