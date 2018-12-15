import { Component, OnInit } from '@angular/core';
import { Post } from '../../model/post'
import { HttpClientService } from 'src/app/http-client.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  displayDialog: boolean;
  showMsg = false;
  msg = '';

  post: Post;
  selectedPost: Post;
  newPost: boolean;
  posts: Post[];
  cols: any[];

  myTitle = '';
  myBody = '';

  constructor(private httpService: HttpClientService) { }

  ngOnInit() {
      this.httpService.getPosts()
      .subscribe( posts => {
        this.posts = posts;
      });

      this.cols = [
          { field: 'id', header: 'ID' },
          { field: 'userId', header: 'User ID' },
          { field: 'title', header: 'Title' }
      ];
  }

  showDialogToAdd() {
      this.newPost = true;
      this.post = {};
      this.post.id = 101;
      this.post.userId = 11;
      this.post.title = '';
      this.post.body = '';
      this.displayDialog = true;
  }

  save() {
    this.post.title = this.myTitle;
    this.post.body = this.myBody;
    this.httpService.createPost( this.post )
      .subscribe( post => {
        let rId = post.id;
        if( rId != 101 ){
          this.msg = 'Create Post fail!';
        }
        else{
          this.msg = 'Create Post successfu!';
        }
        this.showMsg = true;
    });
  }

  onRowSelect(event) {
      this.newPost = false;
      this.httpService.getPost( event.data.id )
      .subscribe( post => {
        this.post = post;
      this.displayDialog = true;
      })
  }

  close(){
    this.displayDialog = false;
  }

  clonePost(c: Post): Post {
      let post;
      for (let prop in c) {
        post[prop] = c[prop];
      }
      return post;
  }
}

