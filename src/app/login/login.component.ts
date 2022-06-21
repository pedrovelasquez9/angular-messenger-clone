import { Component, OnInit } from '@angular/core';
import { UserStatusSelect } from './../interfaces/user-status-select';
import {
  DEFAULT_STATUS,
  DEFAULT_STATUS_OPTIONS,
} from '../constants/login-constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public selectedStatus: string = DEFAULT_STATUS;
  public statusOptions: UserStatusSelect[] = DEFAULT_STATUS_OPTIONS;

  constructor(private router: Router) {}

  login(): void {
    this.router.navigate(['home']);
  }

  ngOnInit(): void {}
}
