import { OnHoverModule } from '../../../shared/directives/on-hover/on-hover.module';
import { AgreementCardComponent } from './agreement-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AgreementCardComponent],
  imports: [
    CommonModule, MatCardModule, MatIconModule, MatButtonModule, OnHoverModule
  ],
  exports: [AgreementCardComponent]
})
export class AgreementCardModule { }
