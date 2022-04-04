import { Component, OnInit } from '@angular/core';
import { JSONPlaceholderlastService } from '../last/jsonplaceholderlast.service';

@Component({
  selector: 'app-userposts',
  templateUrl: './userposts.component.html',
  styleUrls: ['./userposts.component.css']
})
export class UserpostsComponent implements OnInit {

  
  data:Array<any>
  constructor(private JSONPlaceholder: JSONPlaceholderlastService){
    this.data = new Array<any>()
  }
 // this allows the users list to appear as soon as the page is loaded insted of making the viewer push the buttton the second time.
  ngOnInit(): void {
    this.getPostsFromAPI();
  }

  // this code allows us to get the data from the JSONPLACEholder link that is specified in JSONPLACEholderlast service file. this code allows the user list to show up after the "GET USERS" button is pushed.
  getPostsFromAPI(){
    this.JSONPlaceholder.getData().subscribe((data) => {
      console.log(data)
      this.data = data
    })
  }
}
