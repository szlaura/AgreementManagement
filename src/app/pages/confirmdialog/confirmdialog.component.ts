import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmdialog',
  templateUrl: './confirmdialog.component.html',
  styleUrls: ['./confirmdialog.component.scss']
})
export class ConfirmdialogComponent {


  constructor(public dialog:MatDialogRef<ConfirmdialogComponent>) { }

  closeDialog(){
    this.dialog.close(false);
  }


}
