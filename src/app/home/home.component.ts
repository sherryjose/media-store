import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MediaDetails } from './media-details.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HomeComponent {
  @Input() mediaDetails: MediaDetails;
  @Input() set isTitleCleared(value: boolean) {
    if (value) {
      this.mediaDetails = null;
    }
  }
  convertMinToHrs = (min): string => {
    const hours = (min / 60);
    const roundedHours = Math.floor(hours);
    const minutes = (hours - roundedHours) * 60;
    const roundedMinutes = Math.round(minutes);
    return (roundedHours ? `${roundedHours}h` : '') + (roundedMinutes ? ` ${roundedMinutes}m` : '');
  };
}
