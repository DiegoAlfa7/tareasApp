import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lista } from '../../clases/listas';



/*
  Generated class for the ListaDeseosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListaDeseosProvider {

  listas: Lista[] = [];
  public USER_LISTS_IONIC = 'user_lists_ionic';

  constructor(public http: HttpClient) {
    console.log('Hello ListaDeseosProvider Provider');

    this.cargarListas();

    
  }

  cargarListas(listas_json?:string){
    if(listas_json){

    this.listas = JSON.parse(this.USER_LISTS_IONIC);
    }else{

      this.listas = JSON.parse(localStorage.getItem(this.USER_LISTS_IONIC));
    }
    if(!this.listas){

      this.listas = [];
    }
  }

  public getListas(prioridad?: number): Lista[] {

    if(!this.listas){

     let listasJson = localStorage.getItem(this.USER_LISTS_IONIC);
     if(listasJson) {

      this.cargarListas(listasJson);
     
     }

    }
    
    if (prioridad) {
      let listasElected: Lista[] = [];
      for (let index = 0; index < this.listas.length; index++) {
        const element = this.listas[index];
        if (element.prioridad == prioridad) {

          listasElected.push(element);

        }


      }
      return listasElected;
    } else {

      return this.listas;
    }

  }
  agregarLista(lista:Lista){

    this.listas.push(lista);
    this.actualizarLocalStorage();

  }
  eliminarLista(lista: Lista) {

    const index = this.listas.indexOf(lista);

    this.listas.splice(index,1);
    this.actualizarLocalStorage();

  }  
  actualizarLocalStorage(){

    localStorage.setItem(this.USER_LISTS_IONIC, JSON.stringify(this.listas));

  }

}
