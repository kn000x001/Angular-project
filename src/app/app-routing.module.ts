import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { UserpageComponent } from './userpage/userpage.component';
import { UserpostsComponent } from './userposts/userposts.component';

const routes: Routes = [
  {path: 'userpage', component: UserpageComponent},
  {path: 'userinfo/:id', component: UserinfoComponent},
  {path: 'userposts', component: UserpostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
