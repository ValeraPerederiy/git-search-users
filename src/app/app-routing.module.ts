import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { UserPageComponent } from './user-page/user-page.component';

const routes: Routes = [
  {path:'', component:MainComponent}, 
  {path:'repos/:login', component:UserPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
