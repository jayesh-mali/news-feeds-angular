import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigInterceptor } from './interceptor/httpconfig.interceptor';
import { AuthService } from './services/auth.service';
import { PostService } from './services/post.service';
import { ImageService } from './services/image.service';
import { FriendService } from './services/friend.service';
import { InternalServerComponent } from './error-pages/internal-server/internal-server.component';
import { PageNotFoundComponent } from './error-pages/page-not-found/page-not-found.component';
import { UnauthorizeComponent } from './error-pages/unauthorize/unauthorize.component';
import { NewsFeedService } from './services/news-feed.service';
import { CreatePostComponent } from './create-post/create-post.component';
import { CreateImageComponent } from './create-image/create-image.component';
import { FriendsComponent } from './friends/friends.component';
import { ActiveFriendsComponent } from './friends/active-friends/active-friends.component';
import { PendingFriendsComponent } from './friends/pending-friends/pending-friends.component';
import { ReceivedFriendsComponent } from './friends/received-friends/received-friends.component';
import { FriendMenusComponent } from './friends/friend-menus/friend-menus.component';
import { SuggestedFriendsComponent } from './friends/suggested-friends/suggested-friends.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    NewsFeedComponent,
    NavbarComponent,
    UnauthorizeComponent,
    InternalServerComponent,
    PageNotFoundComponent,
    CreatePostComponent,
    CreateImageComponent,
    FriendsComponent,
    ActiveFriendsComponent,
    PendingFriendsComponent,
    ReceivedFriendsComponent,
    FriendMenusComponent,
    SuggestedFriendsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    BsDropdownModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ positionClass: 'toast-top-right' })
  ],
  providers: [
    AuthService,
    PostService,
    ImageService,
    FriendService,
    NewsFeedService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
