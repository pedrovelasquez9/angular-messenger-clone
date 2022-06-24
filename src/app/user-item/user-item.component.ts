import { Component, Input, OnInit } from '@angular/core';
import { DEFAULT_STATUS } from './../constants/login-constants';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
})
export class UserItemComponent implements OnInit {
  @Input() userStatus: string = DEFAULT_STATUS;
  constructor() {}

  ngOnInit(): void {}
}
