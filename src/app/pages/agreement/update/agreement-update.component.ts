import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { getAgreementForm } from 'src/app/shared/forms/agreement.form';


@Component({
  selector: 'app-agreement-update',
  templateUrl: './agreement-update.component.html',
  styleUrls: ['./agreement-update.component.scss']
})
export class AgreementUpdateComponent implements OnInit {

  format: FormGroup | null = null;

  constructor(public dialogRef: MatDialogRef<AgreementUpdateComponent>) { }

  ngOnInit(): void {
    this.initForm();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  initForm(): void {
    this.format = getAgreementForm();
  }

}
