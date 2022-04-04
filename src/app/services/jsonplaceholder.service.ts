// calling the user information from JsonPlaceholder


import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JSONPlaceholderService {

  constructor(private http: HttpClient) { }

  getData():Observable<any> {

// this is the url code connecting the programme to the data in the JSONPlacehoder, it is specified for the users list.

    const url = "https://jsonplaceholder.typicode.com/users"
return this.http.get<any>(url)
  }
}
