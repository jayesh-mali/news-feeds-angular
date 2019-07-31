import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ImageService } from '../services/image.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-image',
  templateUrl: './create-image.component.html',
  styleUrls: ['./create-image.component.css']
})
export class CreateImageComponent implements OnInit {


  createImageForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    image_post: new FormControl('', [Validators.required]),
  });

  fileData: File = null;

  isSubmitted: any;


  constructor(private imageService: ImageService, private router: Router) { }

  ngOnInit() {
    this.isSubmitted = false;
  }

  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
  }

  save() {
    this.isSubmitted = true;
    if (this.createImageForm.valid) {
      const formData = new FormData();
      formData.append('file', this.fileData);
      formData.append('text', this.createImageForm.value.title);
      this.imageService.save(formData).subscribe((res) => {
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
