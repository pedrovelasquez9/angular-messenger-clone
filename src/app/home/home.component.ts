import {
  Component,
  OnInit,
} from '@angular/core';
import {
  DEFAULT_STATUS,
  DEFAULT_STATUS_OPTIONS,
} from './../constants/login-constants';
import { UserStatusSelect } from './../interfaces/user-status-select';
import { UserData } from './../interfaces/user-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  
  public usersList: UserData[] = [{
    name:"Pedro Plasencia", 
    status:"available", 
    shortMessage:"Programación en español"
  },{
    name:"María Valente", 
    status:"available", 
    shortMessage:"Hola Mundo"
  }];
  public userStatus: string = DEFAULT_STATUS;
  public statusOptions: UserStatusSelect[] = DEFAULT_STATUS_OPTIONS;
  constructor() {}

  ngOnInit(): void {}
}
