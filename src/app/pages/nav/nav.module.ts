import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';

@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule, MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule,MatSidenavModule, MatListModule, RouterModule
  ],
  exports: [NavComponent],
})
export class NavModule { }
