import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'trust'
})
export class TrustPipe implements PipeTransform {

  constructor(private sanitize:DomSanitizer){}

  transform(url: string): any {
    return this.sanitize.bypassSecurityTrustUrl(url);
  }

}
