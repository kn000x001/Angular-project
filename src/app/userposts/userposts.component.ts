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

  ngOnInit(): void {
    this.getPostsFromAPI();
  }
  getPostsFromAPI(){
    this.JSONPlaceholder.getData().subscribe((data) => {
      console.log(data)
      this.data = data
    })
  }
}
