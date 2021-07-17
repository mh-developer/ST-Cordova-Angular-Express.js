import { UserLocation } from './../shared/locations.model';
import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../shared/locations.service';
import { Observable, of } from 'rxjs';

@Component({
    selector: 'app-locations-list',
    templateUrl: './locations-list.component.html',
    styleUrls: ['./locations-list.component.scss'],
})
export class LocationsListComponent implements OnInit {
    public locations: Observable<UserLocation[]> = of([]);

    constructor(private locationsService: LocationsService) {}

    ngOnInit() {
        this.locations = this.locationsService.getAll();
    }
}
