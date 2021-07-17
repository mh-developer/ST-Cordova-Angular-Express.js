import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: '',
        loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    },
    {
        path: '',
        loadChildren: () => import('./locations/locations.module').then((m) => m.LocationsModule),
    },
    {
        path: '',
        loadChildren: () => import('./users/users.module').then((m) => m.UsersModule),
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
