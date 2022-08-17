import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Renderer2,
} from '@angular/core';
import {
  DEFAULT_STATUS,
  DEFAULT_STATUS_OPTIONS,
} from './../constants/login-constants';
import { UserStatusSelect } from './../interfaces/user-status-select';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('chatModal') modalElement!: ElementRef;
  public userStatus: string = DEFAULT_STATUS;
  public statusOptions: UserStatusSelect[] = DEFAULT_STATUS_OPTIONS;
  constructor(private renderer: Renderer2) {}

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

  ngOnInit(): void {}
}
