import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
    console.log('(message.service.ts) : ', this.messages);
  }

  clear() {
    this.messages = [];
  }
}
