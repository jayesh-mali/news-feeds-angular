import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { imageAPI } from '../constants/app-config';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpClient: HttpClient) { }

  save(postData: Object): Observable<any> {
    return this.httpClient.post(imageAPI, postData);
  }
}
