import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { RouterModule } from '@angular/router';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MenubarModule } from 'primeng/menubar';
import { MultiSelectModule } from 'primeng/multiselect';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    MenubarModule,
    MultiSelectModule,
    CardModule,
    ToastModule,
  ],
  exports: [
    ToolbarComponent,
    InputTextModule,
    ButtonModule,
    RippleModule,
    MenubarModule,
    MultiSelectModule,
    CardModule,
    ToastModule,
  ],
})
export class SharedModule {}
