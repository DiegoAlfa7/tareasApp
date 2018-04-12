import { Component, OnInit } from '@angular/core';
import { NavController } from "ionic-angular";
import { ListaDeseosProvider } from '../../providers/lista-deseos/lista-deseos.service';

@Component({
    selector: 'app-pendientes',
    templateUrl: 'pendientes.component.html',
    styleUrls: []
})
export class PendientesComponent implements OnInit {
    constructor(
    private _nav:NavController,
    private listas:ListaDeseosProvider
   
) {

   

 }

    ngOnInit(): void { }
}
