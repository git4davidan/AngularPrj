import { Injectable } from '@angular/core';
import { 
  Response,
  ResponseContentType,
  Headers,
  RequestOptions} from '@angular/http';

import { HttpClient, HttpHeaders, HttpEventType, HttpRequest, HttpErrorResponse, HttpEvent } from '@angular/common/http';

import { Observable, Subject, interval, pipe } from 'rxjs';

import { User } from './model/user'
import { Post } from './model/post'

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  private usersUrl: string = 'https://jsonplaceholder.typicode.com/users';
  private postsUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  private headers: Headers;
  private options: RequestOptions;

  constructor(private http: HttpClient) { 
  }

  getUsers(): Observable<User[]> {
    let url = this.usersUrl;
    return this.http.get<User[]>( url );
  }

  getUser( userId: number ): Observable<User> {
    let url = this.usersUrl + '/' + userId;
    return this.http.get<User>( url );
  }

  getPosts(): Observable<Post[]> {
    let url = this.postsUrl;
    return this.http.get<Post[]>( url );
  }

  getPost( postId: number ): Observable<Post> {
    let url = this.postsUrl + '/' + postId;
    return this.http.get<Post>( url );
  }

  createPost( post: Post ): Observable<Post> {
    let url = this.postsUrl;
    let data = JSON.stringify( post );
    return this.http.post<Post>( url, data );
  }
}
