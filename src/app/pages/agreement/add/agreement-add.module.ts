import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgreementAddComponent } from './agreement-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [AgreementAddComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatListModule,
    MatCardModule,
    MatRadioModule
  ],
  exports: [AgreementAddComponent],
})
export class AgreementAddModule { }
