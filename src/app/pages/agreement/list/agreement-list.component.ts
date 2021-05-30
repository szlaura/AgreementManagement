import { Router } from '@angular/router';
import { CrudService } from '../../../services/crud.service';
import { Agreement} from '../../../shared/models/agreement.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AgreementAddComponent } from '../add/agreement-add.component';

@Component({
  selector: 'app-agreement-list',
  templateUrl: './agreement-list.component.html',
  styleUrls: ['./agreement-list.component.scss']
})
export class AgreementListComponent implements OnInit {
  title = 'List:';
  list: Observable<Agreement[]> | null = null;

  constructor(private service: CrudService<Agreement>, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    this.list = this.service.get('agreements');
  }

  getdescid(): void {
    this.list = this.service.getid('agreements');
  }

  gatstartat(): void {
    this.list = this.service.getstartatlimit('agreements');
  }

  onGetAgreement(event: Agreement): void {
    this.router.navigateByUrl('/details/agreement/' + event.id);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AgreementAddComponent, {autoFocus: false,
      maxHeight: '100vh'});
    dialogRef.afterClosed().subscribe((agreement: Agreement) => {
      if (agreement?.agreementAuthorization) {
        this.service.add('agreements', agreement);
      }
    }, err => {
      console.warn(err);
    });
  }

}
