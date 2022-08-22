import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-augular-life-cycle',
  templateUrl: './augular-life-cycle.component.html',
  styleUrls: ['./augular-life-cycle.component.css']
})
export class AugularLifeCycleComponent implements OnInit {
  userName = 'sarin_beam30';

  constructor() { }

  ngOnInit(): void {
  }

  updateUser(): void {
    this.userName = 'Sarin Wanichwasin';
  }

}
