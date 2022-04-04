// getting User Posts from jsonplaceholder


import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JSONPlaceholderpostsService {

  constructor(private http: HttpClient) { }

  getData():Observable<any> {

    // this is the url code connecting the programme to the data in the JSONPlacehoder, it is specified for the user full info.
    const url = "https://jsonplaceholder.typicode.com/users"
return this.http.get<any>(url)
  }
}
