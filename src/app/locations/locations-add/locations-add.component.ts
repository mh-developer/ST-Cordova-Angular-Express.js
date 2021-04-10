import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLocation } from '../shared/locations.model';
import { LocationsService } from '../shared/locations.service';

@Component({
    selector: 'app-locations-add',
    templateUrl: './locations-add.component.html',
    styleUrls: ['./locations-add.component.scss'],
})
export class LocationsAddComponent {
    public location: UserLocation = {} as UserLocation;

    constructor(
        private locationsService: LocationsService,
        private router: Router
    ) {}

    add() {
        this.location.timestamp = `${new Date().getTime()}`;
        this.locationsService.post(this.location).subscribe(
            (res) => {
                this.router.navigateByUrl('/locations', {
                    replaceUrl: true,
                });
            },
            (err) => {
                console.log(err);
            }
        );
    }
}
