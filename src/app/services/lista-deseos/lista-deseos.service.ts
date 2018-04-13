import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lista } from '../../clases/listas';
import { ListaItem } from '../../clases/lista-item';


/*
  Generated class for the ListaDeseosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListaDeseosProvider {

  listas: Lista[] = [];

  constructor(public http: HttpClient) {
    console.log('Hello ListaDeseosProvider Provider');


    let lista1 = new Lista('Lista de Juegos', 3);
    lista1.addItem("Crysis 3");
    lista1.addItem("Far Cry 5");
    lista1.addItem("Fortnite");
    let lista2 = new Lista('Lista de Coches', 3);
    lista2.addItem("BMW");
    lista2.addItem("Audi");
    lista2.addItem("Volkswagen");
    let lista3 = new Lista('Lista de Casas', 3);
    lista3.addItem("Ático");
    lista3.addItem("Dúplex");
    lista3.addItem("Piso");
    this.listas.push(lista1, lista2, lista3);
  }

  public getListas(prioridad?: number): Lista[] {

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

}
