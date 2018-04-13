import { ListaItem } from './lista-item';

export class Lista {

  nombre: string;
  terminada: boolean;
  prioridad: number;
  items: ListaItem[];

  constructor(nombre: string, prioridad: number) {
    this.nombre = nombre;
    this.terminada = false;
    this.prioridad = prioridad;
    this.items = [];
  }
/**
 * 
 * 
 * @param {string} [nombre] non optional
 * @param {boolean} [completado=undefined] default = undefined 
 * @memberof Lista
 */
public addItem(nombre:string, completado:boolean=undefined){

    if(completado != undefined ){

      this.items.push(new ListaItem(nombre, completado));

    }else{

      this.items.push(new ListaItem(nombre));
    }

  }


}
