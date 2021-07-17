import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../shared/users.model';
import { UsersService } from '../shared/users.service';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
    public users: Observable<User[]> = of([]);

    constructor(private usersService: UsersService) {}

    ngOnInit() {
        this.users = this.usersService.getAll();
    }
}
