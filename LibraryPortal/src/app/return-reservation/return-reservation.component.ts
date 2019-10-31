import { MatDialogRef } from '@angular/material';
import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';
import { NotificationService } from '../service/notification.service';

import { Book } from './../model/book';
import { User } from '../model/user';

import { ReservationManagementService } from '../service/reservation-management.service';
import { SearchReservationsComponent } from '../search-reservations/search-reservations.component';


@Component({
  selector: 'app-return-reservation',
  templateUrl: './return-reservation.component.html',
  styleUrls: ['./return-reservation.component.css']
})
export class ReturnReservationComponent implements OnInit {

  @Input() user: User;
  @Input() book: Book;

  message: string = null;

  minDate = new Date();

  constructor(
    public service: ReservationManagementService,
    public notificationService: NotificationService,
    private router: Router,
    public dialogRef: MatDialogRef<SearchReservationsComponent> ) { }

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
    this.returnReservation();
  }

  returnReservation() {
    this.service.returnReservation(this.service.returnFrom.value).subscribe(
      data => {
        this.message = data;
        if (this.message.includes('Success All was successful')) {
          this.notificationService.success(this.message);
          this.service.submitted = true;
          this.onClose();
        } else {
          this.notificationService.error(this.message);
        }
      }
    );
  }

  onClose() {
    this.dialogRef.close();
  }
}
