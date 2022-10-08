import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0 }), animate(300)]),
      transition(':leave', animate(300, style({ opacity: 0 })))
    ])
  ]
})
export class HeaderComponent implements OnInit {
  fragment: string | null = '';
  isResponsiveMenuVisible: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
      this.fragment = fragment;
    });
  }

  onScrollToFragment(fragment?: string): void {
    if (!this.fragment && fragment === '#') {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      return;
    }

    window.location.hash = fragment as string;
    this.isResponsiveMenuVisible = false;
  }

  onToggleResponsiveMenu(): void {
    this.isResponsiveMenuVisible = !this.isResponsiveMenuVisible;
  }
}
