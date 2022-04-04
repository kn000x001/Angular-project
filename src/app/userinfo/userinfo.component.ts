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

// this code wi ensure that users info is automatically shown when the viewer enters the webpage
  ngOnInit(): void {
    this.getUserInfoFromAPI();
  }
// this code allows us to get the data from the JSONPLACEholder link that is specified in JSONPLACEholderlposts service file. 
// Specifically when the button of the certain name is pushed this code will bring the viewer to that users user page with the "USERS post" button and that specific users full information.
  getUserInfoFromAPI() {
    this.JSONPlaceholder.getData().subscribe((data) => {
      const userID = this.route.snapshot.paramMap.get('id') || "";

      [this.user] = data.filter((user) => user.name == userID);
    });
  }
}
  

  
  





