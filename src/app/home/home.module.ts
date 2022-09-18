import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { WelcomeTerminalComponent } from './components/welcome-terminal/welcome-terminal.component';

@NgModule({
  declarations: [HomeComponent, WelcomeTerminalComponent],
  imports: [SharedModule, HomeRoutingModule, NzAutocompleteModule]
})
export class HomeModule {}
