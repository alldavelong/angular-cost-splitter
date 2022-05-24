import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaymentFormComponent } from '../payment-form/payment-form.component';
import { ExpenseFormComponent } from '../expense-form/expense-form.component';
import { IExpense } from '../expense/expense';
import { IPayment } from '../payment/payment';

@Component({
  selector: 'app-menu-plus',
  templateUrl: './menu-plus.component.html',
  styleUrls: ['./menu-plus.component.css']
})
export class MenuPlusComponent implements OnInit {

  @Output() addedExpense: EventEmitter<IExpense> = new EventEmitter();
  @Output() addedPayment: EventEmitter<IPayment> = new EventEmitter();

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  onSelectExpense() {
    let dialogRef = this.dialog.open(ExpenseFormComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      if (!result) { return; }
      result.date = result.date;
      this.addedExpense.emit(result);
    });
  }

  onSelectPayment() {
    let dialogRef = this.dialog.open(PaymentFormComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      if (!result) { return; }
      result.date = result.date;
      this.addedPayment.emit(result);
    });
  }
}
