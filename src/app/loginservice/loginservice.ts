import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export type LoginModelAPI = Record<string, unknown>;

@Injectable({ providedIn: 'root' })
export class Loginservice {
    constructor(private http: HttpClient) {}

    loginUser(obj: LoginModelAPI) {
        return this.http.post("https://projectapi.gerasim.in/api/UserApp/login", obj);
    }
}
