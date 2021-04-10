import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { LocationsListComponent } from './locations-list/locations-list.component';
import { LocationsAddComponent } from './locations-add/locations-add.component';
import { LocationsDetailsComponent } from './locations-details/locations-details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        LocationsListComponent,
        LocationsAddComponent,
        LocationsDetailsComponent,
    ],
    imports: [CommonModule, LocationsRoutingModule, SharedModule],
    exports: [
        LocationsListComponent,
        LocationsAddComponent,
        LocationsDetailsComponent,
    ],
})
export class LocationsModule {}
