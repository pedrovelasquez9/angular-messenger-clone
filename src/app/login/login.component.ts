import { Component, OnInit } from '@angular/core';
import { UserStatusSelect } from './../interfaces/user-status-select';
import {
  DEFAULT_STATUS,
  DEFAULT_STATUS_OPTIONS,
} from '../constants/login-constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public selectedStatus: string = DEFAULT_STATUS;
  public statusOptions: UserStatusSelect[] = DEFAULT_STATUS_OPTIONS;

  constructor() {}

  ngOnInit(): void {}
}
