import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private _http: HttpClient ) { }

  public authorize( flag ) {
    return flag;
  }
}
