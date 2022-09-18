import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';

import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, FormsModule, RouterModule, NzGridModule, NzButtonModule, NzIconModule],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NzGridModule,
    NzButtonModule,
    HeaderComponent,
    NzIconModule,
    NzCardModule
  ]
})
export class SharedModule {}
