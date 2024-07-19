import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderLoginComponent } from '../header-login/header-login.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

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

  constructor() { }

  ngOnInit(): void {
    this.newPostForm = new FormGroup({
      title: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required)
    });
  }

  createPost(): void {
    // Call API to create a new post
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
      this.posts.push(newPost);
      this.newPostForm.reset();
    }
  }

  likePost(post: Post): void {
    post.likes++;
  }

  commentPost(post: Post): void {
    // Open a modal or display a form to create a new comment
    // For now, let's just log the post ID
    console.log(`Comment on post ${post.id}`);
  }
}