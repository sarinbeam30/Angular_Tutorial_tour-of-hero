import { Component, ContentChild, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() userName = '';

  @ViewChild('wrapper') wrapper!: ElementRef;
  @ContentChild('contentWrapper') content!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log('(child component) (ngOnInit) userName : ', this.userName);
  }

  ngAfterContentInit(): void {
    console.log('(child component) (ngAfterContentInit) - wrapper ', this.wrapper);
    console.log('(child component) (ngAfterContentInit) - contentWrapper ', this.content);
  }

  ngAfterContentChecked(): void {
    console.log('[In every change detection cycle hooks] (child component) (ngAfterContentChecked) triggered')
  }

  ngAfterViewInit(): void {
    console.log('(child component) (ngAfterViewInit) test_zaaaa')
  }

  ngAfterViewChecked(): void {
    console.log('[In every change detection cycle hooks] (child component) (ngAfterViewChecked) trigger');
  }

}
