import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserOnMain } from '../interfaces/user-on-main';
import { Repos } from '../interfaces/repos.interface';
import { SearchList } from '../interfaces/searchList.interface';

@Injectable({
  providedIn: 'root'
})
export class GitApiService {
  baseUrl = 'https://api.github.com'

  constructor(private http:HttpClient) { }

  getListOfUsers():Observable<UserOnMain[]>{
    return this.http.get<UserOnMain[]>(`${this.baseUrl}/users`)
  }

  getListOfUserByUsername(username:string):Observable<SearchList>{
    return this.http.get<SearchList>(`${this.baseUrl}/search/users?q=${username}`)
  }

  getUserRepos(username:string):Observable<Repos[]>{
    return this.http.get<Repos[]>(`${this.baseUrl}/users/${username}/repos`)
  }
}
