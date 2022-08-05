import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ItemDetailComponent {
  @Input() data!: string[];

  constructor (private cd: ChangeDetectorRef) {}

  refresh() {
    this.cd.detectChanges();
  }
}