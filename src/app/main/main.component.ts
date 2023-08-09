import { Component } from '@angular/core';
import { GitApiService } from '../services/git-api.service';
import { UserOnMain } from '../interfaces/user-on-main';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  usersList: UserOnMain[] = [];

  searchUser = new FormControl('');

  searchTimer: any;

  errorSearchResponce:boolean = false;
  errorMessage:string = ''

  constructor(private gitApiService: GitApiService) {
    this.gitApiService.getListOfUsers().subscribe(res => {
      this.usersList = res;
      console.log(res);
    })
  }

  serachUserByUsername() {
    clearTimeout(this.searchTimer);
    this.searchTimer = setTimeout(() => {
      if (this.searchUser.value && this.searchUser.value.length > 0) {
        this.gitApiService.getListOfUserByUsername(this.searchUser.value).subscribe(
          userlist => {
            this.usersList = userlist.items
          },
          err =>{
            this.errorSearchResponce = true;
            console.log('error', err, this.errorSearchResponce);
            this.errorMessage = err.message;
          },
          ()=>{
            this.errorSearchResponce = false;
          }
        )
      }
    }, 1000)

  }
}
