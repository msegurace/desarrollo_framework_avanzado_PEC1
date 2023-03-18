import { formatDate } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate',
})
export class FormatDatePipe implements PipeTransform {
  transform(value: Date, ...args: number[]): unknown {
    const locale = 'es';
    switch (args[0]) {
      case 1:
        return formatDate(value, 'ddMMyyyy', locale);
        break;
      case 2:
        return formatDate(value, 'dd / MM / yyyy', locale);
        break;
      case 3:
        return formatDate(value, 'dd/MM/yyyy', locale);
        break;
      case 4:
        return formatDate(value, 'dd-MM-yyyy', locale);
        break;
      default:
        break;
    }
    return null;
  }
}
