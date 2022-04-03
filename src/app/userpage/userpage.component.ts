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
  
  ngOnInit(): void {
  this.getDataFromAPI();  
  }
  
  
  getDataFromAPI(){
    this.JSONPlaceholder.getData().subscribe((data) => {
      console.log(data)
      this.data = data
    })
  }

 

}
