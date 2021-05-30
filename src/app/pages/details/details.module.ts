import { AgreementUpdateModule } from './../agreement/update/agreement-update.module';
import { ConfirmdialogModule } from './../confirmdialog/comfirmdialog.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { DetailsRoutingModule } from './details-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';

@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    DetailsRoutingModule, MatCardModule, MatButtonModule,
    MatIconModule, MatDialogModule, MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
     ConfirmdialogModule,
    MatTableModule,
    AgreementUpdateModule
  ],
  exports: [DetailsComponent],
})
export class DetailsModule { }
