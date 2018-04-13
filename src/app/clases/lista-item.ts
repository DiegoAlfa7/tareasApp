export class ListaItem {

  nombre: string;
  completado: boolean;
  /**
   * Creates an instance of ListaItem.
   * @param {string} [nombre=undefined] sets the name of the item, if not given value'll be: 'default'
   * @param {boolean} [completado=undefined] sets whether the item is completed or not, if not given value'll be false
   * @memberof ListaItem
   */
  constructor(nombre:string = undefined, completado:boolean = undefined){

    if(nombre){
      this.nombre = nombre;
    }else{
      this.nombre = 'default';
      
    }

    if(completado != undefined){

      this.completado = completado;

    }else{
      this.completado = false;
    }

  }
}
