import * as tslib_1 from "tslib";
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
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            RegisterComponent,
            LoginComponent,
            DashboardComponent,
            AddBookComponent,
            MenuComponent,
            SearchBooksComponent,
            SearchReservationsComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            FormsModule,
            HttpClientModule,
            NgxPaginationModule,
            routing,
            ReactiveFormsModule
        ],
        providers: [
            { provide: APP_BASE_HREF, useValue: '/' },
            RegisterService,
            LoginService,
            CategoryManagementService,
            LanguageManagementService,
            BookManagementService,
            SearchBooksService,
            ReservationManagementService
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map