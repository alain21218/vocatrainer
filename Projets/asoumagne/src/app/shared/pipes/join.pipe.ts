import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {

  transform(value: Array<string>, sep=" - "): any {
    if(!value) return value;
    return value.join(sep);
  }

}
