import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/Employee';

@Injectable({
    providedIn: 'root',
})

export class EmployeeService {
    constructor(private http: HttpClient) { }

    private url = '';

    public getEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(`${environment.apiUrl}/${this.url}`);
    }

    

}