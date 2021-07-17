import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/users.model';
import { UsersService } from '../shared/users.service';

@Component({
    selector: 'app-users-add',
    templateUrl: './users-add.component.html',
    styleUrls: ['./users-add.component.scss'],
})
export class UsersAddComponent {
    public user: User = {} as User;

    constructor(private usersService: UsersService, private router: Router) {}

    add() {
        this.usersService.post(this.user).subscribe(
            (res) => {
                this.router.navigateByUrl('/users', {
                    replaceUrl: true,
                });
            },
            (err) => {
                console.log(err);
            }
        );
    }
}
