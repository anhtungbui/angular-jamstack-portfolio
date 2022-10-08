import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'app-responsive-menu',
  templateUrl: './responsive-menu.component.html',
  styleUrls: ['../header/header.component.scss', './responsive-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResponsiveMenuComponent implements OnInit {
  @Input()
  fragment: string | null = '';

  @Output()
  selectedFragment: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    console.log('[ResponsiveMenu] fragment:', this.fragment);
  }

  onSelect(fragment: string): void {
    this.selectedFragment.emit(fragment);
  }
}
