import { Component, OnInit, Input } from '@angular/core';
import { DEFAULT_STATUS } from './../../constants/login-constants';

@Component({
  selector: 'app-status-indicator',
  templateUrl: './status-indicator.component.html',
  styleUrls: ['./status-indicator.component.scss'],
})
export class StatusIndicatorComponent implements OnInit {
  @Input() userStatus: string = DEFAULT_STATUS;
  constructor() {}

  ngOnInit(): void {}
}
