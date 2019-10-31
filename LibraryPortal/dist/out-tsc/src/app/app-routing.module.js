import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddBookComponent } from './add-book/add-book.component';
import { SearchBooksComponent } from './search-books/search-books.component';
import { SearchReservationsComponent } from './search-reservations/search-reservations.component';
const routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'home',
        component: DashboardComponent
    },
    {
        path: 'add-book',
        component: AddBookComponent
    },
    {
        path: 'search-books',
        component: SearchBooksComponent
    },
    {
        path: 'search-reservations',
        component: SearchReservationsComponent
    },
    {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
export const routing = RouterModule.forRoot(routes);
//# sourceMappingURL=app-routing.module.js.map