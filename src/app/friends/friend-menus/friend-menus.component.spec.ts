import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendMenusComponent } from './friend-menus.component';

describe('FriendMenusComponent', () => {
  let component: FriendMenusComponent;
  let fixture: ComponentFixture<FriendMenusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendMenusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
