import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  createPostForm = new FormGroup({
    title: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),
  });

  isSubmitted: any;


  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.isSubmitted = false;

  }

  save() {
    this.isSubmitted = true;
    if (this.createPostForm.valid) {
      this.postService.save(this.createPostForm.value).subscribe((res) => {
        this.router.navigate(['/news-feeds']);
      }, (badResponse) => {
        console.log("badResponse");
        console.log(badResponse);
      });
    } else {
      return;
    }
  }

}
