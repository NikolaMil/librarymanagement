import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchReservations } from '../model/searchReservations';
import { Reservation } from '../model/reservation';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable()

export class ReservationManagementService {

    confirmForm: FormGroup = new FormGroup({
        id: new FormControl(null),
        dateConfirmed: new FormControl(new Date()),
        librarianConfirmedBy: new FormControl(''),
        code: new FormControl('')
    });

    returnFrom: FormGroup = new FormGroup({
        id: new FormControl(null),
        dateReturned: new FormControl(new Date()),
        librarianReturnedTo: new FormControl(''),
        code: new FormControl('')
    });

    addResForm: FormGroup = new FormGroup({
        dateReservedFrom: new FormControl(new Date()),
        dateReservedTo: new FormControl(new Date()),
        userMembershipId: new FormControl(''),
        bookISBN: new FormControl(null)
    });

    public url = environment.serverUrl + '/api/reservations';
    private searchUrl = environment.serverUrl + '/api/search-reservations';
    private confirmResUrl = environment.serverUrl + '/api/confirm-reservation';
    private returnResUrl = environment.serverUrl + '/api/return-reservation';
    private addResUrl = environment.serverUrl + '/api/add-reservation';
    public submitted = false;


    constructor(private http: HttpClient) { }

    getReservations(): Observable<any> {
        return this.http.get(this.url);
    }

    searchReservations(searchReservations: SearchReservations) {
        return this.http.post(this.searchUrl, searchReservations);
    }

    confirmReservation(reservation: Reservation): Observable<any> {
        return this.http.put<Reservation>(this.confirmResUrl + '/' + reservation.id, reservation);
    }

    returnReservation(reservation: Reservation): Observable<any> {
        return this.http.put<Reservation>(this.returnResUrl + '/' + reservation.id, reservation);
    }

    populateConfirmForm(reservation: Reservation, userMembershipId) {
        this.confirmForm.controls.code.setValue(reservation.code);
        this.confirmForm.controls.id.setValue(reservation.id);
        this.confirmForm.controls.librarianConfirmedBy.setValue(userMembershipId);
    }

    populateReturnForm(reservation: Reservation, userMembershipId) {
        this.returnFrom.controls.code.setValue(reservation.code);
        this.returnFrom.controls.id.setValue(reservation.id);
        this.returnFrom.controls.librarianReturnedTo.setValue(userMembershipId);
    }

    addReservation(reservation: Reservation): Observable<any> {
        return this.http.post(this.addResUrl, reservation);
    }

    populateAddReservationForm(reservation: Reservation, userMembershipId, bookISBN) {
        this.addResForm.controls.bookISBN.setValue(bookISBN);
        this.addResForm.controls.userMembershipId.setValue(userMembershipId);
    }
}
