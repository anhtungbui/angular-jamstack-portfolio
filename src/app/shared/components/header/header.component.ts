import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  fragment: string | null = '';

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
  }
}
