import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { getAgreementForm } from 'src/app/shared/forms/agreement.form';

@Component({
  selector: 'app-agreement-add',
  templateUrl: './agreement-add.component.html',
  styleUrls: ['./agreement-add.component.scss']
})
export class AgreementAddComponent implements OnInit {

  form: FormGroup | null = null;


  constructor(public dialogRef: MatDialogRef<AgreementAddComponent>) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = getAgreementForm();
  }

}
