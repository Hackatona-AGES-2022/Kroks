import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input('title')
  title!: string;

  @Input('icon')
  icon!: string;

  clicked: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.clicked = !this.clicked
  }
}
