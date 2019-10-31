import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let SearchReservationsComponent = class SearchReservationsComponent {
    constructor(router, reservationManagementService) {
        this.router = router;
        this.reservationManagementService = reservationManagementService;
        this.reservations = [];
        this.searchReservationForm = {};
        this.loading = false;
        this.page = 1;
        this.showMyContainer = false;
    }
    ngOnInit() {
        this.getReservations();
        this.searchReservations();
        if (this.user == null) {
            this.router.navigate([`/login`]);
        }
    }
    getReservations() {
        this.reservationManagementService.getReservations().subscribe(data => {
            this.reservations = data;
            this.totalRec = this.reservations.length;
        });
    }
    searchReservations() {
        this.reservationManagementService.searchReservations(this.searchReservationForm).subscribe((data) => {
            this.loading = true;
            this.totalRec = this.reservations.length;
            this.reservations = data;
        });
    }
    onSubmit() {
        this.searchReservations();
    }
};
tslib_1.__decorate([
    Input()
], SearchReservationsComponent.prototype, "user", void 0);
SearchReservationsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-search-reservations',
        templateUrl: 'search-reservations.component.html'
    })
], SearchReservationsComponent);
export { SearchReservationsComponent };
//# sourceMappingURL=search-reservations.component.js.map