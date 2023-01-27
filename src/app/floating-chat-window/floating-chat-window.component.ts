import {  ElementRef, Component, Input, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { UserData } from '../interfaces/user-data';

@Component({
  selector: 'app-floating-chat-window',
  templateUrl: './floating-chat-window.component.html',
  styleUrls: ['./floating-chat-window.component.scss']
})
export class FloatingChatWindowComponent implements OnInit {

  @Input()
  userData!: UserData;
  @ViewChild('chatModal') modalElement!: ElementRef;
  constructor(private renderer: Renderer2) { }

  closeModal(): void {
    this.modalElement.nativeElement.close();
  }

  startBuzzing(): void {
    this.renderer.addClass(
      this.modalElement.nativeElement,
      'chat-modal-buzz-animation'
    );
  }

  stopBuzzing(): void {
    setTimeout(() => {
      this.renderer.removeClass(
        this.modalElement.nativeElement,
        'chat-modal-buzz-animation'
      );
    }, 1000);
  }

  playBuzz(): void {
    const audio = new Audio();
    audio.src = 'assets/audio/buzz.mp3';
    audio.play();
    this.startBuzzing();
    this.stopBuzzing();
  }

  ngOnInit(): void {
  }

}
