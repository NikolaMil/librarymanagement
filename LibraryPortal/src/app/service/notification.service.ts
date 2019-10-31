import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public snackBar: MatSnackBar) { }

  configSuccess: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'right',
    verticalPosition: 'top'
  };

  configError: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'right',
    verticalPosition: 'top'
  };

  success(msg) {
    this.configSuccess.panelClass = ['notification', 'success'];
    this.snackBar.open(msg, '', this.configSuccess);
  }

  error(msg) {
    this.configError.panelClass = ['notification', 'error'];
    this.snackBar.open(msg, '', this.configError);
  }
}
