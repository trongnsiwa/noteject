import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend, HttpHeaders } from '@angular/common/http';

const WORK_API = 'http://localhost:8080/api/work/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  private httpClient: HttpClient;

  constructor(private http: HttpClient, private handler: HttpBackend) {
    this.httpClient = new HttpClient(handler);
  }

  addWork(title: string) {
    return this.http.post(
      WORK_API,
      {
        title,
      },
      httpOptions
    );
  }
}
