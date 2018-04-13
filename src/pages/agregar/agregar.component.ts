

import { Component, OnInit } from '@angular/core';
import { Lista } from '../../app/clases/listas';
import { ListaItem } from '../../app/clases/lista-item';
import { ListaDeseosProvider } from '../../app/services/lista-deseos/lista-deseos.service';
import { NavController } from 'ionic-angular';
import { PendientesComponent } from '../pendientes/pendientes.component';

@Component({
    selector: 'app-agregar',
    templateUrl: './agregar.component.html',
    styleUrls: []
})
export class AgregarComponent implements OnInit {

    nombreLista:string;
    nombreItem:string;
    lista:Lista;
    items:ListaItem[] = [];

    constructor(private _listasService:ListaDeseosProvider,
                private _nav:NavController) { }

    ngOnInit(): void { 



    }
    agregarLista(){

        if(!this.nombreLista){

            return;

        }

        this.lista = new Lista(this.nombreLista,3);
        this.lista.items = this.items;
        this._listasService.listas.push(this.lista);
        console.log(this.lista);
        this._nav.push(PendientesComponent);

        
    }

    agregarItem(){

        if(!this.nombreItem){
                /* No se ha dado un nombre de item antes de añadir la lista */
            console.log('No se ha dado un nombre de item antes de añadir la lista');
            return;
        }

        

        this.items.push(new ListaItem(this.nombreItem));

        
    }
    deleteItem(item:number){
        //Filter is not that effincient, since it loops for every item even when
        // the 'to-delete' element had been already filtered
        /* 
        this.lista.items = this.lista.items.filter((itemIt:ListaItem)=>{
      
           return itemIt != item;
        }); 
        */
        this.items.splice(item, 1);
    
    }
    
}
