import { MailModel } from '../models/mail.model';

// import { Injectable } from '@angular/core';
//
// @Injectable()

export class MailService {
  private inbox: MailModel[] = [
    {
      received: 1517768685159,
      author: 'Jane',
      subject: 'January 30th meeting follow-up',
    },
    {
      received: 1517768723525,
      author: 'Jane',
      subject: 'January 31th meeting follow-up',
    },
  ];

  constructor() { }

  public getAll() {
    return this.inbox;
  }
}
