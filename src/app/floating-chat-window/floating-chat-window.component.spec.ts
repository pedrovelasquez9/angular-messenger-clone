import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingChatWindowComponent } from './floating-chat-window.component';

describe('FloatingChatWindowComponent', () => {
  let component: FloatingChatWindowComponent;
  let fixture: ComponentFixture<FloatingChatWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatingChatWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingChatWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
