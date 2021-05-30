import { ConfirmdialogComponent } from './../pages/confirmdialog/confirmdialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DialogService {
  constructor(private dialog: MatDialog) { }

  openConfirmDialog(){
    return this.dialog.open(ConfirmdialogComponent, {
      width:'400px',
      disableClose: true
    });
  }



}
