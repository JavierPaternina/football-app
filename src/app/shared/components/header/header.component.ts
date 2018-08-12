import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ftb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  @Input() headerTitle: string;
  @Input() menuBtn = false;
  @Input() backBtn = false;
  @Input() navigation;

  constructor() { }

  ngOnInit(): void { }
}
