import { Component, OnInit } from '@angular/core';
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
  public userStatus: string = DEFAULT_STATUS;
  public statusOptions: UserStatusSelect[] = DEFAULT_STATUS_OPTIONS;
  constructor() {}

  ngOnInit(): void {}
}
