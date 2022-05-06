import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message: string | undefined;

  constructor() { }

  add(message: string) {
    this.message = message;
  }

  clear() {
    this.message = undefined;
  }
}
