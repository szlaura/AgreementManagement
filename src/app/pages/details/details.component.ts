import { getAgreementForm } from 'src/app/shared/forms/agreement.form';
import { DialogService } from './../../services/dialog.service';
import { ConfirmdialogComponent } from './../confirmdialog/confirmdialog.component';
import { AgreementUpdateComponent } from '../agreement/update/agreement-update.component';
import { CrudService } from '../../services/crud.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Agreement} from '../../shared/models/agreement.model';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  id = '';
  dataNameStr = '';
  inData: Observable<any> | null = null;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: CrudService<any>,
    private location: Location,
    private dialog: MatDialog,
    private dialogService: DialogService) {
  }

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    if (params?.id) {
      this.id = params.id;
      this.dataNameStr = params.dataNameStr;
      this.getItem();
    }
    //console.log(this.id, this.dataNameStr);
  }


  getItem(): void {
    this.inData = this.service.getById(this.dataNameStr + 's', this.id);
  }

  close(): void {
    this.location.back();
  }

  remove(){
    this.dialogService.openConfirmDialog().afterClosed().subscribe(res => {
      if(res){
        this.router.navigate(['/home']);
        this.service.delete(this.dataNameStr+'s',this.id);
      }
    });
  }
  openEdit(){
    this.dialog.open(AgreementUpdateComponent, {autoFocus: false
  });

  }
   openConfirmDialog(): void {
    this.dialog.open(ConfirmdialogComponent, {
      disableClose: true,
      width: '400px'});
  }

}
