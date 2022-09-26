import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, delay, Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject();

  isLoading: boolean = true;
  private isLoading$: Observable<boolean> = new BehaviorSubject(this.isLoading);

  constructor() {}

  ngOnInit(): void {
    this.isLoading$
      .pipe(delay(2000), takeUntil(this.unsubscribe$))
      .subscribe(() => (this.isLoading = false));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
