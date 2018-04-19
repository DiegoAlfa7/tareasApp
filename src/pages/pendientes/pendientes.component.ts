import { Component, OnInit } from '@angular/core';
import { NavController } from "ionic-angular";
import { ListaDeseosProvider } from '../../app/services/lista-deseos/lista-deseos.service';
import { Lista } from '../../app/clases/listas';
import { AgregarComponent } from '../agregar/agregar.component';
import { TareaComponent } from '../tarea/tarea.component';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
    selector: 'app-pendientes',
    templateUrl: 'pendientes.component.html',
    animations: [
        trigger('fade', [
            state('visible', style({
                opacity: 1
            })),
            state('invisible', style({
                opacity: 0.1
            })),
            transition('visible <=> invisible', animate('200ms linear'))
        ])
    ]
   
})
export class PendientesComponent implements OnInit {

    public listas: Lista[] = []; 
    public toggleItems:number = 2;
   


    constructor(
    private _nav:NavController,
    private listasService:ListaDeseosProvider
   
) {

    

 }  
    

    toggleItem(){

       this.toggleItems = (this.toggleItems == 2) ? undefined : 2;
        console.log(this.toggleItems);

    }
    public verLista(lista:Lista){

        this._nav.push(TareaComponent, {lista});

    }
    
   public irAgregar() {

    this._nav.push(AgregarComponent);

    }

    ngOnInit(): void { 

        this.listas = this.listasService.getListas();
        

    }
}
