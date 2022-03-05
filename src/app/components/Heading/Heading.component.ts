import { Component, Input, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ns-heading',
    templateUrl: './Heading.component.html',
})

export class HeadingComponent implements OnInit {

    @Input('headingText') headingText: string;

    @Input('headingColor') headingColor: string;

    constructor() { }

    ngOnInit() { }
}