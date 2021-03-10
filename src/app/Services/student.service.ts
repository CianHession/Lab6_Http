import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  getStudentData():Observable<any>{
    return this.http.get('https://www.jsonblob.com/api/jsonblob/2554031d-81ad-11eb-8c36-c75a4a8b64ca');
  }

  GetWeatherData():Observable<any>{
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Galway&APPID=0552b1e83f0dfcf32ba1482e27476614');
  }
}
