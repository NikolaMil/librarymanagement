import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
let ReservationManagementService = class ReservationManagementService {
    constructor(http) {
        this.http = http;
        this.url = environment.serverUrl + '/api/reservations';
        this.searchUrl = environment.serverUrl + '/api/search-reservations';
    }
    getReservations() {
        return this.http.get(this.url);
    }
    searchReservations(searchReservations) {
        return this.http.post(this.searchUrl, searchReservations);
    }
};
ReservationManagementService = tslib_1.__decorate([
    Injectable()
], ReservationManagementService);
export { ReservationManagementService };
//# sourceMappingURL=reservation-management.service.js.map