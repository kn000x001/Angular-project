import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JSONPlaceholderpostsService } from '../posts/jsonplaceholderposts.service';


@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css'],
})
export class UserinfoComponent implements OnInit {
  user: any = '';

  constructor(private JSONPlaceholder: JSONPlaceholderpostsService, private route: ActivatedRoute) {
    
  }
  ngOnInit(): void {
    this.getUserInfoFromAPI();
  }

  getUserInfoFromAPI() {
    this.JSONPlaceholder.getData().subscribe((data) => {
      const userID = this.route.snapshot.paramMap.get('id') || "";

      [this.user] = data.filter((user) => user.name == userID);
    });
  }
}
  

  
  





