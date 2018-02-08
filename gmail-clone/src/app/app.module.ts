import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserCardComponent } from './user-card/user-card.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { MailComponent } from './mail/mail.component';

import { UserService } from './services/user.service'
import { MailService } from './services/mail.service'

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    MailBoxComponent,
    MailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    UserService,
    MailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
