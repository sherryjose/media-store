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
}
