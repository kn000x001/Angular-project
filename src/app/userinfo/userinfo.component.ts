import { Component, OnInit } from '@angular/core';
import { JSONPlaceholderpostsService } from 'src/app/posts/jsonplaceholderposts.service';


@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  data:Array<any>

  constructor(private JSONPlaceholder: JSONPlaceholderpostsService,){
    this.data = new Array<any>()
  }
  ngOnInit(): void {
    this.getUserInfoFromAPI()
  }
  
  getUserInfoFromAPI(){
    this.JSONPlaceholder.getData().subscribe((data) => {
      console.log(data)
      this.data = data
    })
  }

  
  




}
