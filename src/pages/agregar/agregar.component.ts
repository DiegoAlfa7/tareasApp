

import { Component, OnInit } from '@angular/core';
import { Lista } from '../../app/clases/listas';
import { ListaItem } from '../../app/clases/lista-item';
import { ListaDeseosProvider } from '../../app/services/lista-deseos/lista-deseos.service';
import { NavController,AlertController, AlertOptions } from 'ionic-angular';
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
                private _nav:NavController,
            private _alertC:AlertController) { }

    ngOnInit(): void { 



    }
    agregarLista(){

        if(!this.nombreLista){
            let alertOptions:AlertOptions = {

                title: 'Error',
                subTitle: 'Necesitamos un nombre para tu lista',
                message:'Escribe un nombre para tu lista y después podrás agregarla a tu colección',
                buttons: [{
                    text:"Entendido!",
                    role: 'cancel',
                    

                }]

            }
            let alert = this._alertC.create(alertOptions);
            alert.present();
            return;

        }

        this.lista = new Lista(this.nombreLista,3);
        this.lista.items = this.items;
        this._listasService.listas.push(this.lista);
        console.log(this.lista);
        this._nav.pop();

        
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
