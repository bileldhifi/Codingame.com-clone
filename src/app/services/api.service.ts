import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private url = 'http://localhost:9090';

  // post method
  executeCode(code: string): Observable<any> {
    const ideUrl = `${this.url}/compile`; 
    return this.http.post(ideUrl, { code });
  }
}
