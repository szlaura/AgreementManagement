import { Component, Input, Output,  OnInit, EventEmitter } from '@angular/core';
import { Agreement } from '../../../shared/models/agreement.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-agreement-card',
  templateUrl: './agreement-card.component.html',
  styleUrls: ['./agreement-card.component.scss']
})

export class AgreementCardComponent implements OnInit {
  @Input() agreement: Agreement = {} as any;
  @Output() getAgreement = new EventEmitter<Agreement>();


  constructor() { }

  ngOnInit(): void {
  }

}
