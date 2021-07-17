import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../../shared/api/api.service';
import { UserLocation } from './locations.model';

@Injectable({
    providedIn: 'root',
})
export class LocationsService {
    constructor(private apiService: ApiService) {}

    public getAll(): Observable<UserLocation[]> {
        return this.apiService.get(`/locations`).pipe(map((data) => data));
    }

    public get(locationId: number): Observable<UserLocation> {
        return this.apiService
            .get(`/locations/${locationId}`)
            .pipe(map((data) => data));
    }

    public post(location: UserLocation): Observable<UserLocation> {
        return this.apiService
            .post(`/locations`, location)
            .pipe(map((data) => data));
    }

    public put(locationId: number, location: UserLocation): Observable<void> {
        return this.apiService
            .put(`/locations/${locationId}`, location)
            .pipe(map((data) => data));
    }

    public delete(locationId: number): Observable<void> {
        return this.apiService
            .delete(`/locations/${locationId}`)
            .pipe(map((data) => data));
    }
}
