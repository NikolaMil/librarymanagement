import { ReturnReservationComponent } from './../return-reservation/return-reservation.component';
import { ConfirmReservationComponent } from './../confirm-reservation/confirm-reservation.component';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ReservationManagementService } from '../service/reservation-management.service';
import { Reservation } from '../model/reservation';
import { User } from '../model/user';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig, MatTableDataSource, MatPaginator, MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-search-reservations',
    templateUrl: 'search-reservations.component.html',
    styleUrls: ['search-reservations.component.css']
})

export class SearchReservationsComponent implements OnInit {

    displayedColumns: string[] = ['code', 'userMembershipId', 'bookISBN', 'dateReservedFrom', 'dateReservedTo', 'confirmed', 'returned'];

    @Input() user: User;

    reservations: Reservation[] = [];
    public searchReservationForm: any = {};

    dataSource = new MatTableDataSource<Reservation>(this.reservations);
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

    loading = false;
    public totalRec: number;
    public page = 1;
    public showMyContainer = false;

    constructor(public router: Router,
                private reservationManagementService: ReservationManagementService,
                private dialog: MatDialog ) {}

    ngOnInit() {
        // this.getReservations();
        this.searchReservations();
        if (this.user == null) {
            this.router.navigate([`/login`]);
        }
    }

    getReservations() {
        this.reservationManagementService.getReservations().subscribe(
            data => {
                this.reservations = data;
                this.totalRec = this.reservations.length;
            }
        );
    }

    searchReservations() {
        this.reservationManagementService.searchReservations(this.searchReservationForm).subscribe(
            (data: any[]) => {
                this.loading = true;
                this.totalRec = this.reservations.length;
                this.reservations = data;
                this.dataSource = new MatTableDataSource(this.reservations);
                this.dataSource.paginator = this.paginator;
            }
        );
    }

    onSubmit() {
        this.searchReservations();
    }

    clearFilters() {
        this.searchReservationForm.code = '';
        this.searchReservationForm.dateReservedFrom = '';
        this.searchReservationForm.dateReservedTo = '';
        this.searchReservationForm.email = '';
        this.searchReservationForm.membershipId = '';
        this.searchReservationForm.isConfirmed = false;
    }

    callSearch() {
        if (this.reservationManagementService.submitted) {
            this.searchReservations();
        }
    }

    onConfirm(reservation: Reservation, userMembershipId) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.width = '26%';
        this.reservationManagementService.populateConfirmForm(reservation, userMembershipId);
        this.dialog.open(ConfirmReservationComponent, dialogConfig);
        this.dialog.afterAllClosed.subscribe(() => {
            this.callSearch();
        });
    }

    onReturn(reservation: Reservation, userMembershipId) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.width = '26%';
        this.reservationManagementService.populateReturnForm(reservation, userMembershipId);
        this.dialog.open(ReturnReservationComponent, dialogConfig);
        this.dialog.afterAllClosed.subscribe(() => {
            this.callSearch();
        });
    }
}
