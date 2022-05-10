import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';
import{map} from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { ReportResult } from '../models/reportResult';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private http: HttpClient) { }
  private serverUrl = `${environment.apiUrl}`


  getTabledata(): Observable<any> {
      return this.http.get(`${this.serverUrl}report-results`)
  }

}
