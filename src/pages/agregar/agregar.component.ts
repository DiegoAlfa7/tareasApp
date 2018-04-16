


import { Component, OnInit } from '@angular/core';
import { Lista } from '../../app/clases/listas';
import { ListaItem } from '../../app/clases/lista-item';
import { ListaDeseosProvider } from '../../app/services/lista-deseos/lista-deseos.service';
import { NavController,AlertController, AlertOptions } from 'ionic-angular';

import { state, style, trigger, transition, animate } from '@angular/animations';


@Component({
    selector: 'app-agregar',
    templateUrl: './agregar.component.html',
    styleUrls: [], 
    animations:[
        trigger('fadeIn',[
            state('visible',
                style({

                opacity: 1,
                    transform: 'translate(0px,10px)'

                 })),
            state('invisible',
                style({

                    opacity: 0,
                    transform: 'translate(0px,40px)'
                    


                })),
                transition('* => *', animate('0.5s'))       
        ]),
        trigger('moveUp', [
            state('normal',
                style({

                    transform: 'translate(0px,0px)',

                })),
            state('up',
                style({

                    
                    transform: 'translate(0px,30px)',


                })),
           
            transition('normal => up', animate('0.8s')),
            
            transition('up => normal', animate('0.8s')),
            
        ])
    ]
})
export class AgregarComponent implements OnInit {

    nombreLista:string;
    nombreItem:string;
    lista:Lista;
    items:ListaItem[] = [];
    visibleState:string = 'invisible';
    anim_going:string = 'normal';

    constructor(private _listasService:ListaDeseosProvider,
                private _nav:NavController,
            private _alertC:AlertController) { }

    ngOnInit(): void { 

        

    }
    toggleVisible(){

      this.visibleState =  (this.visibleState == 'visible') ? 'invisible' : 'visible';

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
        this._listasService.agregarLista(this.lista);
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
        if (this.items.length == 1){
            this.visibleState = 'visible';
            this.anim_going = 'up';
            
        }

        
    }
    deleteItem(item:number){
        //Filter is not that effincient, since it loops for every item even when
        // the 'to-delete' element had been already filtered
        /* 
        this.lista.items = this.lista.items.filter((itemIt:ListaItem)=>{
      
           return itemIt != item;
        }); 
        */
        if(this.items.length == 1){
            this.visibleState = 'invisible';
            this.anim_going = 'up';
            this.anim_going = 'normal';
            setTimeout(()=>{
               
                this.items.splice(item, 1);
                
                

            },400);
            
            return;
        }
        this.items.splice(item, 1);
    
    }
    
}
