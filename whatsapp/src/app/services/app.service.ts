import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    private apiUrl = 'http://localhost:8000/api';
    private token = '898da1e0e5e48280b4817a44d815f8e66984b96b';  // or load from storage

    constructor(private http: HttpClient) { }

    getAuthHeaders() {
        return new HttpHeaders({
            'Authorization': `Token ${this.token}`
        });
    }
}
