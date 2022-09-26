import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { HomeRoutingModule } from './home-routing.module';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSpinModule } from 'ng-zorro-antd/spin';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

import { HomeComponent } from './home.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { LoaderComponent } from './loader/loader.component';
import { TagComponent } from './components/tag/tag.component';

export function playerFactory(): any {
  return player;
}

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    AboutComponent,
    ProjectCardComponent,
    ProjectDetailComponent,
    ProjectListComponent,
    AvatarComponent,
    LoaderComponent,
    TagComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule,
    NzAutocompleteModule,
    NzTagModule,
    NzAvatarModule,
    NzTimelineModule,
    NzModalModule,
    NzDividerModule,
    NzSpinModule,
    LottieModule.forRoot({ player: playerFactory })
  ]
})
export class HomeModule {}
