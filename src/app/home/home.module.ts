import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { HomeRoutingModule } from './home-routing.module';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

import { HomeComponent } from './home.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';

export function playerFactory(): any {
  return player;
}

@NgModule({
  declarations: [HomeComponent, HeroComponent, AboutComponent],
  imports: [
    SharedModule,
    HomeRoutingModule,
    NzAutocompleteModule,
    NzTagModule,
    NzAvatarModule,
    NzTimelineModule,
    LottieModule.forRoot({ player: playerFactory })
  ]
})
export class HomeModule {}
