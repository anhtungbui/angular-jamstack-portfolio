import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzListModule } from 'ng-zorro-antd/list';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { NzIconModule } from 'ng-zorro-antd/icon';
import {
  LinkedinFill,
  GithubFill,
  MailOutline,
  StarOutline,
  MenuOutline
} from '@ant-design/icons-angular/icons';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { ResponsiveMenuComponent } from './components/responsive-menu/responsive-menu.component';

export function playerFactory(): any {
  return player;
}

const icons = [LinkedinFill, GithubFill, MailOutline, StarOutline, MenuOutline];

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ResponsiveMenuComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NzGridModule,
    NzButtonModule,
    NzAffixModule,
    NzDividerModule,
    NzDropDownModule,
    NzListModule,
    NzIconModule.forRoot(icons),
    LottieModule.forRoot({ player: playerFactory })
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NzGridModule,
    NzButtonModule,
    NzIconModule,
    NzCardModule,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule {}
