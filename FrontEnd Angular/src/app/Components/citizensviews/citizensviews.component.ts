import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderLoginComponent } from '../header-login/header-login.component';
import { FooterComponent } from '../footer/footer.component';
import { HttpClient } from '@angular/common/http';

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  likes: number;
  comments: Comment[];
}

interface Comment {
  id: number;
  content: string;
  author: string;
  date: string;
}

@Component({
  selector: 'app-citizensviews',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HeaderLoginComponent, FooterComponent],
  templateUrl: './citizensviews.component.html',
  styleUrls: ['./citizensviews.component.css']
})
export class CitizensviewsComponent implements OnInit {
  posts: Post[] = [];
  newPostForm!: FormGroup;
  newCommentForm!: FormGroup;
  currentCommentPostId: number | null = null; // To track which post is being commented on

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.newPostForm = new FormGroup({
      title: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required)
    });
    this.newCommentForm = new FormGroup({
      content: new FormControl('', Validators.required)
    });
    this.loadPosts();
  }

  loadPosts(): void {
    this.http.get<Post[]>('http://localhost:3000/api/posts')
      .subscribe(posts => this.posts = posts);
  }

  createPost(): void {
    const titleControl = this.newPostForm.get('title');
    const contentControl = this.newPostForm.get('content');
  
    if (titleControl && contentControl) {
      const newPost: Post = {
        id: this.posts.length + 1,
        title: titleControl.value,
        content: contentControl.value,
        author: 'John Doe', // Replace with actual user data
        date: new Date().toISOString(),
        likes: 0,
        comments: []
      };

      this.http.post<Post>('http://localhost:3000/api/posts', newPost)
        .subscribe(post => {
          this.posts.push(post);
          this.newPostForm.reset();
        });
    }
  }

  likePost(post: Post): void {
    this.http.post(`http://localhost:3000/api/posts/${post.id}/like`, {})
      .subscribe(() => post.likes++);
  }

  commentPost(postId: number): void {
    const contentControl = this.newCommentForm.get('content');

    if (contentControl) {
      const newComment: Comment = {
        id: 0, // This will be set by the backend
        content: contentControl.value,
        author: 'John Doe', // Replace with actual user data
        date: new Date().toISOString()
      };

      this.http.post<Comment>(`http://localhost:3000/api/posts/${postId}/comment`, newComment)
        .subscribe(comment => {
          const post = this.posts.find(p => p.id === postId);
          if (post) {
            post.comments.push(comment);
          }
          this.newCommentForm.reset();
        });
    }
  }

  setCommentPostId(postId: number): void {
    this.currentCommentPostId = postId;
  }
}
