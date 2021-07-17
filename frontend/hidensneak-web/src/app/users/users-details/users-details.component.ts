import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../shared/users.model';
import { UsersService } from '../shared/users.service';

@Component({
    selector: 'app-users-details',
    templateUrl: './users-details.component.html',
    styleUrls: ['./users-details.component.scss'],
})
export class UsersDetailsComponent implements OnInit {
    public user: Observable<User>;

    constructor(
        private usersService: UsersService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        this.route.params.subscribe((params) => {
            const { id } = params;
            if (id) {
                this.user = this.usersService.get(id);
            } else {
                this.router.navigateByUrl('/users', {
                    replaceUrl: true,
                });
            }
        });
    }

    public async delete() {
        this.usersService.delete((await this.user.toPromise()).id).subscribe(
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
