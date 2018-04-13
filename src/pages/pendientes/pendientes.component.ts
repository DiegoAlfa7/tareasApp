import { Component, OnInit } from '@angular/core';
import { NavController } from "ionic-angular";
import { ListaDeseosProvider } from '../../app/services/lista-deseos/lista-deseos.service';
import { Lista } from '../../app/clases/listas';


@Component({
    selector: 'app-pendientes',
    templateUrl: 'pendientes.component.html',
    styleUrls: []
})
export class PendientesComponent implements OnInit {

    public listas: Lista[] = []; 

    constructor(
    private _nav:NavController,
    private listasService:ListaDeseosProvider
   
) {

   

 }

    ngOnInit(): void { 

        this.listas = this.listasService.getListas();


    }
}
