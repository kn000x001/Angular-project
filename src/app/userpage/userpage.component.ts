import { Component, OnInit } from '@angular/core';
import {JSONPlaceholderService} from 'src/app/services/jsonplaceholder.service'


@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  data:Array<any>

  constructor(private JSONPlaceholder: JSONPlaceholderService){
    this.data = new Array<any>()
  }
  // this allows the users list to appear as soon as the page is loaded insted of making the viewer push the buttton the second time.
  ngOnInit(): void {
  this.getDataFromAPI();  
  }
  
  // this code allows us to get the data from the JSONPLACEholder link that is specified in JSONPLACEholder service file. this code allows the user list to show up after the "GET USERS" button is pushed.
  getDataFromAPI(){
    this.JSONPlaceholder.getData().subscribe((data) => {
      console.log(data)
      this.data = data
    })
  }

 

}
