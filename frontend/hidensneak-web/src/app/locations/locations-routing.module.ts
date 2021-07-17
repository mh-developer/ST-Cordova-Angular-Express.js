import { LocationsAddComponent } from './locations-add/locations-add.component';
import { LocationsDetailsComponent } from './locations-details/locations-details.component';
import { LocationsListComponent } from './locations-list/locations-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'locations',
        component: LocationsListComponent,
    },
    {
        path: 'locations/add',
        component: LocationsAddComponent,
    },
    {
        path: 'locations/:id',
        component: LocationsDetailsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LocationsRoutingModule {}
