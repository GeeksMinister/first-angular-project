import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/Employee';

@Injectable({
    providedIn: 'root',
})

export class EmployeeService {
    private url = '';

    constructor(private http: HttpClient) { }

    public getEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(`${environment.apiUrl}/${this.url}`);
    }

}