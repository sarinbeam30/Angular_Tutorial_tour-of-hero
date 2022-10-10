import { Component, OnChanges, SimpleChanges } from '@angular/core';

import { Observable, interval, fromEvent, Subscription } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-hero-async-message',
  template: `
    <h4>Async Hero Message and AsyncPipe</h4>
    <p>Position X : {{ positionX }}</p>
    <p>Message: {{ message$ | async }}</p>
    <button type="button" (click)="resend()">Resend</button>`,
})
export class HeroAsyncMessageComponent implements OnChanges {

  message$ : Observable<string>;

  private messages = [
    'You are my hero!',
    'You are the best hero!',
    'Will you be my hero?'
  ];

  positionX: number = 0;

  public clicks = fromEvent<PointerEvent>(document, 'click');

  constructor() { 
    this.message$ = this.getResendObservable();
    console.log('this.clicks : ', this.clicks)
    this.getPosition()
  }

  resend() {
    this.message$ = this.getResendObservable();
  }

  // interval --> Creates an Observable that emits sequential numbers every specified interval of time
  private getResendObservable() {
    return interval(500).pipe(
      // map --> 
      map(i => this.messages[i]),
      take(this.messages.length)
    );
  }

  ngOnChanges(): void {
    this.getPosition();
  }


  private getPosition() {
    this.clicks.pipe(map(ev => ev.clientX)).subscribe(x => {
      console.log('ko test noi')
      console.log('this.posX : ', this.positionX)
      this.positionX = x;
    }) 
  }
}
