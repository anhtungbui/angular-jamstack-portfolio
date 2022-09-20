import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { WelcomeTerminalComponent } from './components/welcome-terminal/welcome-terminal.component';

export function playerFactory(): any {
  return player;
}

@NgModule({
  declarations: [HomeComponent, WelcomeTerminalComponent],
  imports: [
    SharedModule,
    HomeRoutingModule,
    NzAutocompleteModule,
    LottieModule.forRoot({ player: playerFactory })
  ]
})
export class HomeModule {}
