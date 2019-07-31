import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedFriendsComponent } from './received-friends.component';

describe('ReceivedFriendsComponent', () => {
  let component: ReceivedFriendsComponent;
  let fixture: ComponentFixture<ReceivedFriendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivedFriendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivedFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
