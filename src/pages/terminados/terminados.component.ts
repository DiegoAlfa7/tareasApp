import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'app-terminados',
    templateUrl: './terminados.component.html',
    styleUrls: []
})
export class TerminadosComponent implements OnInit {
    constructor(private _nav:NavController) { }

    ngOnInit(): void { }
}
