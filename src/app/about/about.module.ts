import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AboutRoutingModule } from './about-routing.module';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';

import { AboutComponent } from './about.component';

@NgModule({
  declarations: [AboutComponent],
  imports: [SharedModule, AboutRoutingModule, NzAvatarModule, NzCollapseModule]
})
export class AboutModule {}
