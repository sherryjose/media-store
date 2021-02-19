import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(min: number): string {
    const hours = (min / 60);
    const roundedHours = Math.floor(hours);
    const minutes = (hours - roundedHours) * 60;
    const roundedMinutes = Math.round(minutes);
    return (roundedHours ? `${roundedHours}h` : '') + (roundedMinutes ? ` ${roundedMinutes}m` : '');
  };
}
