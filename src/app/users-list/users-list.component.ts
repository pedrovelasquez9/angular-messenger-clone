import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  @Input() title: string = 'connected';
  @Input() isOpened: boolean = true;
  constructor() {}

  toggleIsOpened(): void {
    this.isOpened = !this.isOpened;
  }

  ngOnInit(): void {}
}
