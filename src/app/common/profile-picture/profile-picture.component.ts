import { Component, Input, OnInit } from '@angular/core';
import { DEFAULT_STATUS } from './../../constants/login-constants';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss'],
})
export class ProfilePictureComponent implements OnInit {
  @Input() userStatus: string = DEFAULT_STATUS;
  constructor() {}

  ngOnInit(): void {}
}
