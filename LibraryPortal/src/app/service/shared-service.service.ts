import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  // tslint:disable-next-line: ban-types
  searchReservationFn: Function;

  constructor() { }
}
