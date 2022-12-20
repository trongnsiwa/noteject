import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend, HttpHeaders } from '@angular/common/http';
import { LabelInput } from '../models';

const WORK_API = 'http://localhost:8080/api/work';
const LABEL_API = 'http://localhost:8080/api/label';

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

  // work
  addWork(title: string, description: string, labels: LabelInput[]) {
    return this.http.post(
      WORK_API,
      {
        title,
        description,
        labels,
      },
      httpOptions
    );
  }

  getPendingWorks(page: number, size: number) {
    return this.http.get(WORK_API + '/pending', {
      ...httpOptions,
      params: {
        page: page.toString(),
        size: size.toString(),
      },
    });
  }

  getTodayWorks(page: number, size: number) {
    return this.http.get(WORK_API + '/today', {
      ...httpOptions,
      params: {
        page: page.toString(),
        size: size.toString(),
      },
    });
  }

  getSavedWorks(page: number, size: number) {
    return this.http.get(WORK_API + '/saved', {
      ...httpOptions,
      params: {
        page: page.toString(),
        size: size.toString(),
      },
    });
  }

  // label
  getLabels(page: number, size: number, searchedName: string) {
    return this.http.get(LABEL_API, {
      ...httpOptions,
      params: {
        page: page.toString(),
        size: size.toString(),
        searchedName,
      },
    });
  }
}
