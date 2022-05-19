import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaymentFormComponent } from '../payment-form/payment-form.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  @Input() payment: any;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openPaymentForm(id: number) {
    let dialogRef = this.dialog.open(PaymentFormComponent, {
      data: {
        id: id
      }
    })
      .afterClosed().subscribe(result => {
        if (!result) {return;}
        this.payment.date = result.date;
        this.payment.amount = result.amount;
        this.payment.spentBy = result.spentBy;
        this.payment.receivedBy = result.receivedBy;
      });
  }

}
