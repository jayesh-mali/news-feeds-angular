import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { UnauthorizeComponent } from './error-pages/unauthorize/unauthorize.component';
import { PageNotFoundComponent } from './error-pages/page-not-found/page-not-found.component';
import { InternalServerComponent } from './error-pages/internal-server/internal-server.component';
import { NewsFeedsResolver } from './resolver/news-feeds.resolver';
import { SignupComponent } from './signup/signup.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { CreateImageComponent } from './create-image/create-image.component';
import { FriendsComponent } from './friends/friends.component';
import { ActiveFriendsComponent } from './friends/active-friends/active-friends.component';
import { PendingFriendsComponent } from './friends/pending-friends/pending-friends.component';
import { ReceivedFriendsComponent } from './friends/received-friends/received-friends.component';
import { ActiveFriendsResolver } from './resolver/active-friends.resolver';
import { PendingFriendsResolver } from './resolver/pending-friends.resolver';
import { ReceivedFriendsResolver } from './resolver/received-friends.resolver';
import { SuggestedFriendsResolver } from './resolver/suggested-friends.resolver';
import { SuggestedFriendsComponent } from './friends/suggested-friends/suggested-friends.component';




const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'create-post', component: CreatePostComponent },
  { path: 'create-image', component: CreateImageComponent },
  {
    path: 'friends', component: FriendsComponent, children: [
      {
        path: 'suggested-friends', component: SuggestedFriendsComponent,
        resolve: { suggestedFriends: SuggestedFriendsResolver }
      },
      {
        path: 'active-friends', component: ActiveFriendsComponent,
        resolve: { activeFriends: ActiveFriendsResolver }
      },
      {
        path: 'pending-friends', component: PendingFriendsComponent,
        resolve: { pendingFriends: PendingFriendsResolver }
      },
      {
        path: 'received-friends', component: ReceivedFriendsComponent,
        resolve: { receivedFriends: ReceivedFriendsResolver }
      }
    ]
  },
  {
    path: 'news-feeds', component: NewsFeedComponent,
    resolve: { newsFeeds: NewsFeedsResolver }
  },
  { path: '401', component: UnauthorizeComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '500', component: InternalServerComponent },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    NewsFeedsResolver,
    ActiveFriendsResolver,
    PendingFriendsResolver,
    ReceivedFriendsResolver,
    SuggestedFriendsResolver
  ]
})

export class AppRoutingModule { }
