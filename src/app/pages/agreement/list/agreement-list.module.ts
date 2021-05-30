import { AgreementAddModule } from '../add/agreement-add.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AgreementCardModule } from '../card/agreement-card.module';
import { ContainerModule } from '../../../shared/components/container/container.module';
import { AgreementListRoutingModule } from './agreement-list-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgreementListComponent } from './agreement-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [AgreementListComponent],
  imports: [
    CommonModule, AgreementListRoutingModule, MatToolbarModule, ContainerModule, MatButtonModule, MatIconModule,AgreementCardModule, AgreementAddModule
  ]
})
export class AgreementListModule { }
