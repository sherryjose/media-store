import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from './data.service';
import { MediaDetails } from './home/media-details.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mediaDetails: MediaDetails;
  subsription: Subscription;
  isTitleCleared: boolean;

  constructor(private readonly dataService: DataService) { }

  onTitleClick(titleId: string) {
    this.subsription = this.dataService.getMediaDetails(titleId).subscribe((data:MediaDetails) => this.mediaDetails = data, error => this.mediaDetails = null);
  }

  onTitleClear(isTitleCleared: boolean) {
    this.isTitleCleared = isTitleCleared;
  }

  ngOnDestroy() {
    this.subsription.unsubscribe();
  }
}
