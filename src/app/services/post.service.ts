import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { postAPI } from '../constants/app-config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  save(postData: Object): Observable<any> {
    return this.httpClient.post(postAPI, postData);
  }
}
