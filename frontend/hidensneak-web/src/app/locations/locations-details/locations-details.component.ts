import { Observable } from 'rxjs';
import { UserLocation } from './../shared/locations.model';
import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../shared/locations.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-locations-details',
    templateUrl: './locations-details.component.html',
    styleUrls: ['./locations-details.component.scss'],
})
export class LocationsDetailsComponent implements OnInit {
    public location: Observable<UserLocation>;

    constructor(
        private locationsService: LocationsService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        this.route.params.subscribe((params) => {
            const { id } = params;
            if (id) {
                this.location = this.locationsService.get(id);
            } else {
                this.router.navigateByUrl('/locations', {
                    replaceUrl: true,
                });
            }
        });
    }

    public async delete() {
        this.locationsService
            .delete((await this.location.toPromise()).id)
            .subscribe(
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
