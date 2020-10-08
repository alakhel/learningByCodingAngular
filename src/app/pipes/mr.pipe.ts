import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mr'
})
export class MrPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return 'Mr. ' + value;
  }

}
