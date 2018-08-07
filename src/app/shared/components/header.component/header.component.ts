import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ftb-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

    @Input() headerTitle: string;
    @Input() menu = false;

    constructor() { }

    ngOnInit(): void { }
}