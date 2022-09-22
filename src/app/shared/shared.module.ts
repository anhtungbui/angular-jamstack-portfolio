import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAffixModule } from 'ng-zorro-antd/affix';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { NzIconModule } from 'ng-zorro-antd/icon';
import {
  LinkedinFill,
  GithubFill,
  MailOutline,
  StarOutline
} from '@ant-design/icons-angular/icons';

const icons = [LinkedinFill, GithubFill, MailOutline, StarOutline];

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NzGridModule,
    NzButtonModule,
    NzAffixModule,
    NzIconModule.forRoot(icons)
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
