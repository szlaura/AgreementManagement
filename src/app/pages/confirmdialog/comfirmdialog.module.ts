import { ConfirmdialogComponent } from './confirmdialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [ConfirmdialogComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, MatCardModule, MatDialogModule, MatButtonModule, MatIconModule, MatTabsModule, MatFormFieldModule, MatInputModule
  ],
  exports: [ConfirmdialogComponent],
})
export class ConfirmdialogModule { }
