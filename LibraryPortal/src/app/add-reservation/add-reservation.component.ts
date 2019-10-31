import { SearchBooksComponent } from './../search-books/search-books.component';
import { MatDialogRef } from '@angular/material';
import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';
import { NotificationService } from '../service/notification.service';

import { Book } from './../model/book';
import { User } from '../model/user';

import { ReservationManagementService } from '../service/reservation-management.service';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit {

  @Input() user: User;
  @Input() book: Book;

  message: string = null;

  minDate = new Date();
  bindMinDate = new Date(this.service.addResForm.get('dateReservedFrom').value);
  date = this.service.addResForm.controls.dateReservedFrom;
  maxDate = this.service.addResForm.controls.dateReservedTo.value - this.service.addResForm.controls.dateReservedFrom.value  === 7;

  constructor(
    public service: ReservationManagementService,
    public notificationService: NotificationService,
    private router: Router,
    public dialogRef: MatDialogRef<SearchBooksComponent> ) { }

  ngOnInit() {
      if (this.user == null) {
        if (sessionStorage.getItem('user') !== 'null') {
            this.user = JSON.parse(sessionStorage.getItem('user'));
        } else {
            this.router.navigate([`/login`]);
        }
    }
  }

  onSubmit() {
    this.addConfirmation();
  }

  addConfirmation() {
    this.service.addReservation(this.service.addResForm.value).subscribe(
      data => {
        this.message = data;
        if (this.message.includes('Success All was successful')) {
          this.notificationService.success(this.message);
          this.service.submitted = true;
          this.onClose();
        } else {
          this.notificationService.error(this.message);
        }
      });
  }

  onClose() {
    this.dialogRef.close();
  }
}
