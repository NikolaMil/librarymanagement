import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddBookComponent } from './add-book/add-book.component';
import { SearchBooksComponent } from './search-books/search-books.component';
import { SearchReservationsComponent } from './search-reservations/search-reservations.component';
import { ConfirmReservationComponent } from './confirm-reservation/confirm-reservation.component';
import { ReturnReservationComponent } from './return-reservation/return-reservation.component';

const routes: Routes = [
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
  path: 'confirm-reservation',
  component: ConfirmReservationComponent
},
{
  path: 'return-reservation',
  component: ReturnReservationComponent
},
{
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
