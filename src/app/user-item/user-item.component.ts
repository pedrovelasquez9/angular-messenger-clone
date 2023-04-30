import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FloatingChatWindowComponent } from '../floating-chat-window/floating-chat-window.component';
import { UserData } from './../interfaces/user-data';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
})
export class UserItemComponent implements OnInit {
  @Input() user!: UserData;
  @ViewChild(FloatingChatWindowComponent) floatingChat!:any;

  constructor() {}

  ngOnInit(): void {}

  openChat(): void{
    this.floatingChat.modalElement.nativeElement.show();
    this.floatingChat.dragElement(this.floatingChat.modalElement.nativeElement);
  }
}
