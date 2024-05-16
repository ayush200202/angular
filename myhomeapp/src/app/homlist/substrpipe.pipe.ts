import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substrpipe',
  standalone: true
})
export class SubstrpipePipe implements PipeTransform {

  transform(value: any,start:number,end:number): unknown {
    return value.substr(start,end)
  }

}
