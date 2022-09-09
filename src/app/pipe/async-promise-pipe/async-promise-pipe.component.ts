import { Component } from '@angular/core';

@Component({
  selector: 'app-async-promise-pipe',
  templateUrl: './async-promise-pipe.component.html',
  styleUrls: ['./async-promise-pipe.component.css']
})
export class AsyncPromisePipeComponent {

  greeting : Promise<string>|null = null;
  arrived: boolean = false;

  private resolve: Function|null = null;

  constructor() { 
    this.reset();
  }

  reset() {
    this.arrived = false;
    this.greeting = new Promise<string>((resolve, reject) => {
      this.resolve = resolve
    })
    // console.log('[async-promise-pipe] this.resolve : ', this.greeting);
  }

  clicked() {
    if (this.arrived) {
      this.reset();
    } else {
      /**
       * The bang operator tells the compiler to temporarily relax the "not null" constraint that it might otherwise demand. 
       * It says to the compiler: "As the developer, I know better than you that this variable cannot be null right now".
       */
      this.resolve!('hi there from clicked !');
      this.arrived = true;
    }
  }

}
