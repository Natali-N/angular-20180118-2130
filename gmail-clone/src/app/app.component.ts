import { Component, OnInit } from '@angular/core';

import { UserService } from './services/user.service';
import { MailService } from './services/mail.service';

import { MailModel } from './models/mail.model';
import { UserModel } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public users: UserModel[];
  public inbox: MailModel[];

  constructor(
    private userService: UserService,
    private mailService: MailService
  ) {}

  ngOnInit() {
    this.users = this.userService.getAll();
    this.inbox = this.mailService.getAll();
  }
}
