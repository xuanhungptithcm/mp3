import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNameAudio'
})
export class FormatNameAudioPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    value = value.substr(0, value.length - 4);
    return value.substr(0, 25);
  }

}
