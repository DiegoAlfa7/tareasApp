import { Pipe, PipeTransform } from '@angular/core';
import { ListaItem } from '../clases/lista-item';

@Pipe({
    name: 'up_slice',
    pure: false
})
export class UnpureSlicePipe implements PipeTransform {
    transform(array: ListaItem[], args?:number): ListaItem[] {
        
        if(args){

          return  array.slice(0,args);

        }else{

            return array;

        }


    }
}