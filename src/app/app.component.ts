import { Component } from '@angular/core';
import {JSONPlaceholderService} from './services/jsonplaceholder.service'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angualr-project-nika';

  data:Array<any>

  constructor(private JSONPlaceholder: JSONPlaceholderService){
    this.data = new Array<any>()
  }

    // this code allows us to get the data from the JSONPLACEholder link that is specified in JSONPLACEholder service file. this code allows the user list to show up after the "GET USERS" button is pushed.
    // the users list will only appear after the "GET USERS" button is pushed and the viewer is brought to the apropriate page.
  getDataFromAPI(){
    this.JSONPlaceholder.getData().subscribe((data) => {
      console.log(data)
    })
  }
}