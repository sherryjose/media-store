import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { FilterService } from './filter.service';
import { TitleData, TitleSuggestions } from './title-suggestions.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class FilterComponent implements OnInit {
  @Output() titleClick = new EventEmitter();
  @Output() titleClear = new EventEmitter();
  titleSuggestions: TitleData[];
  subscription: Subscription;
  loading = false;
  title: string;
  titleSubject$ = new Subject<string>();

  constructor(private readonly filterService: FilterService) { }

  ngOnInit() {
    this.getTitleSuggestions();
  }

  getTitleSuggestions() {
    this.titleSubject$.pipe(
      distinctUntilChanged(),
      tap(() => { this.titleSuggestions = null; this.titleClear.emit(false); }),
      debounceTime(1000),
    ).subscribe((title: string) => {
      this.loading = true;
      this.subscription = this.filterService.getTitleSuggestions(title).subscribe((data: TitleSuggestions) => {
        this.titleSuggestions = data.d;
        this.loading = false;
      },
        () => this.loading = false
      );
    });
  }

  onTitleChange(title: string) {
    title ? this.titleSubject$.next(title) : this.titleClear.emit(true);
  }

  onTitleSelection(id: string) {
    this.titleClick.emit(id);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
