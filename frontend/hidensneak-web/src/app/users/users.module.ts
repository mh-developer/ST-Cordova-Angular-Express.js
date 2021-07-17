import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersAddComponent } from './users-add/users-add.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { UsersListComponent } from './users-list/users-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        UsersAddComponent,
        UsersDetailsComponent,
        UsersListComponent,
    ],
    imports: [CommonModule, UsersRoutingModule, SharedModule],
    exports: [UsersAddComponent, UsersDetailsComponent, UsersListComponent],
})
export class UsersModule {}
