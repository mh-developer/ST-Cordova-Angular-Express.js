import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../../shared/api/api.service';
import { User } from './users.model';

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    constructor(private apiService: ApiService) {}

    public getAll(): Observable<User[]> {
        return this.apiService.get(`/users`).pipe(map((data) => data));
    }

    public get(userId: number): Observable<User> {
        return this.apiService
            .get(`/users/${userId}`)
            .pipe(map((data) => data));
    }

    public post(user: User): Observable<User> {
        return this.apiService.post(`/users`, user).pipe(map((data) => data));
    }

    public put(userId: number, user: User): Observable<void> {
        return this.apiService
            .put(`/users/${userId}`, user)
            .pipe(map((data) => data));
    }

    public delete(userId: number): Observable<void> {
        return this.apiService
            .delete(`/users/${userId}`)
            .pipe(map((data) => data));
    }
}
