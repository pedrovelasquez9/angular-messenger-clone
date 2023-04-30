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

  dragElement(element: HTMLElement) {
    let isMouseDown = false;
    let offsetX = 0;
    let offsetY = 0;

    element.addEventListener('mousedown', onMouseDown);

    function onMouseDown(event: MouseEvent) {
      isMouseDown = true;
      offsetX = event.clientX - element.getBoundingClientRect().left;
      offsetY = event.clientY - element.getBoundingClientRect().top;
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    }

    function onMouseMove(event: MouseEvent) {
      if (!isMouseDown) return;

      let newX = event.clientX - offsetX;
      let newY = event.clientY - offsetY;

      // Comprobar los límites del viewport
      const viewportWidth = Math.max(document.documentElement.clientWidth || 0);
      const viewportHeight = Math.max(document.documentElement.clientHeight || 0);

      const elementWidth = element.offsetWidth;
      const elementHeight = element.offsetHeight;

      newX = Math.min(Math.max(newX, 0), viewportWidth - elementWidth);
      newY = Math.min(Math.max(newY, 0), viewportHeight - elementHeight);
      element.style.left = newX + 'px';
      element.style.top = newY + 'px';
    }

    function onMouseUp() {
      isMouseDown = false;
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }
  }
    // let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    // elmnt.onmousedown = dragMouseDown;
    // let modalTop = elmnt.style.top.replace('px', '');
    // let modalLeft = elmnt.style.left.replace('px', '');
    // let diffX = 0;
    // let diffY = 0;
    // function dragMouseDown(e:MouseEvent) {
      
    //   e.preventDefault();
    //   // get the mouse cursor position at startup:
    //   modalTop = elmnt.style.top.replace('px', '');
    //   modalLeft = elmnt.style.left.replace('px', '');
    //   pos3 = e.clientX;
    //   pos4 = e.clientY;
    //   diffX = pos3-parseInt(modalLeft) || 0;
    //   diffY = pos4-parseInt(modalTop) || 0;
    //   document.onmouseup = closeDragElement;
    //   // call a whenever the cursor moves:
    //   document.onmousemove = elementDrag;
    // }
  
    // function elementDrag(e:MouseEvent) {
    //   console.log(pos3, diffX)
    //   e.preventDefault();
    //   // calculate the new cursor position:
    //   pos1 = pos3 - e.clientX;
    //   pos2 = pos4 - e.clientY;
    //   pos3 = e.clientX;
    //   pos4 = e.clientY;
    //   // set the element's new position:
    //   const newYPositionDiff = (elmnt.offsetTop - pos2) + elmnt.clientHeight;
    //   const newXPositionDiff = (elmnt.offsetLeft - pos1) + elmnt.clientWidth;
    //   // const newYPositionDiff = (pos4 - diffY) + elmnt.clientHeight;
    //   // const newXPositionDiff = (pos3 - diffX) + diffX;
      
    //   if(newYPositionDiff < document.body.clientHeight){
    //     elmnt.style.top = pos4 - diffY < 0 ? "0px" : (elmnt.offsetTop - pos2) + "px";
    //   }
    //   if(newXPositionDiff < document.body.clientWidth){
    //     elmnt.style.left = pos3 - diffX < 0 ? "0px" : (elmnt.offsetLeft - pos1) + "px";
    //   }
    // }
  
    // function closeDragElement() {
    //   // stop moving when mouse button is released:
    //   document.onmouseup = null;
    //   document.onmousemove = null;
    // }
  // }

  ngOnInit(): void {
    
  }

}
