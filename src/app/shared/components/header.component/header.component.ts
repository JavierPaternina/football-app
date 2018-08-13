import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ftb-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

    @Input() headerTitle: string;
    @Input() menuBtn = false;
    @Input() backBtm = false;

    constructor() { }

    ngOnInit(): void { }
}
