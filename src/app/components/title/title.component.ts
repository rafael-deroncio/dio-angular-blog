import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css', './title.responsive.component.css'],
})
export class TitleComponent {
  @Input() value: string = '';

  constructor() {}
}
