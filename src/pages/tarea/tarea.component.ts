import { Component, OnInit, OnDestroy } from '@angular/core';
import { ListaDeseosProvider } from '../../app/services/lista-deseos/lista-deseos.service';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Lista } from '../../app/clases/listas';

@Component({
    selector: 'app-tarea',
    templateUrl: './tarea.component.html',
    
})
export class TareaComponent implements OnInit, OnDestroy{
    
    ngOnDestroy(): void {
        this._listaDeseos.actualizarLocalStorage();
    }
    lista:Lista
    
    constructor(
        private _listaDeseos:ListaDeseosProvider,
        private _navC:NavController,
        private _navParams:NavParams,
        private alertCtrl:AlertController
    ) { 

        this.lista = _navParams.get('lista');

    }

    deleteLista(){

        let confirm = this.alertCtrl.create({
            title: 'Use this lightsaber?',
            message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
            buttons: [
                {
                    text: 'Disagree',
                    handler: () => {
                        return;
                    }
                },
                {
                    text: 'Agree',
                    handler: () => {
                        this._listaDeseos.eliminarLista(this.lista);
                    }
                }
            ]
        });
        confirm.present();




    }

    ngOnInit(): void { }
}
