import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pSort'
})
export class PSortPipe implements PipeTransform {
  order = {"desc":-1,"asc":1, null:0}
  transform(value: string[], order: string): string[] {
    return value.sort((a,b)=>this.order[order]*a.localeCompare(b));
  }

}
