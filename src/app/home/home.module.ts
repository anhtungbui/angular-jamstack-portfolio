import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { HomeRoutingModule } from './home-routing.module';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

import { HomeComponent } from './home.component';
import { HeroComponent } from './components/hero/hero.component';

export function playerFactory(): any {
  return player;
}

@NgModule({
  declarations: [HomeComponent, HeroComponent],
  imports: [
    SharedModule,
    HomeRoutingModule,
    NzAutocompleteModule,
    NzTagModule,
    LottieModule.forRoot({ player: playerFactory })
  ]
})
export class HomeModule {}
