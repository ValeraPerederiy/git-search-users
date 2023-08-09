import { Component } from '@angular/core';
import { GitApiService } from '../services/git-api.service';
import { ActivatedRoute } from '@angular/router';
import { Repos } from '../interfaces/repos.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent {
  username: string | null = '';
  
  userReposList:Repos[] = [];
  curRepoForModal:Repos|null = null;
  
  constructor(private gitApiService: GitApiService, private activeRoute: ActivatedRoute, private modalService: NgbModal) {
    this.username = activeRoute.snapshot.params['login']
    if (this.username) {

      this.gitApiService.getUserRepos(this.username).subscribe(repos => {
        this.userReposList = repos;
        console.log(this.userReposList);
        
      })
    }
  }

  openVerticallyCentered(content:any, repo:Repos) {
		this.modalService.open(content, { centered: true });
    this.curRepoForModal = repo;
	}
}
