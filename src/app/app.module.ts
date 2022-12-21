import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfilePictureComponent } from './common/profile-picture/profile-picture.component';
import { StatusIndicatorComponent } from './common/status-indicator/status-indicator.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserItemComponent } from './user-item/user-item.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, ProfilePictureComponent, StatusIndicatorComponent, UsersListComponent, UserItemComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
