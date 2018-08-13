import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ftb-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() navigation: any;
  constructor() { }

  ngOnInit(): void { }
}
