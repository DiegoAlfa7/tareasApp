import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'default'})
export class DefaultPipe implements PipeTransform {
    transform(value: string, args:string):string {

        return (value)? value:args;
    }
}