import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/* import { Lista } from '../../classes/Lista';
import { ListaItem } from '../../classes/listaItem'; */


/*
  Generated class for the ListaDeseosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListaDeseosProvider {

/*   listas:Lista[] = []; */

  constructor(public http: HttpClient) {
      console.log('Hello ListaDeseosProvider Provider');


    /*   let lista1 = new Lista('Lita de peis');
      let lista2 = new Lista('Lita de seip');
      let lista3 = new Lista('Lita de peiss'); */
  }

}
