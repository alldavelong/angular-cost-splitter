import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BalanceCalculator } from '../balance/balance-calculator';
import { IExpense } from '../expense/expense';
import { JournalEntryService } from '../journal-entry.service';
import { IPayment } from '../payment/payment';
import { IUser } from '../user';

@Component({
  selector: 'app-settlement',
  templateUrl: './settlement.component.html',
  styleUrls: ['./settlement.component.css']
})
export class SettlementComponent implements OnInit {
  expenses: IExpense[] = [];
  payments: IPayment[] = [];
  users: IUser[] = [];

  suggestedPayments?: IPayment[];
  selectablePayments?: ISelectablePayment[];
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<SettlementComponent>,
    private journalEntryService: JournalEntryService
  ) { }

  ngOnInit(): void {
    this.suggestedPayments = this.data.suggestedPayments;
    if (this.suggestedPayments) {
      this.selectablePayments = this.suggestedPayments.map(p => {return {selected: false, payment: p}});
    }
  }

  getSelectedPayments() {
    return this.selectablePayments?.filter(p => p.selected);
  }

  save(): void {
    let paymentsToSave: IPayment[]|undefined = this.getSelectedPayments()?.map(p => {return p.payment});
    if (paymentsToSave?.length == 0) {
      return;
    }

    paymentsToSave?.forEach(p => {
      this.journalEntryService.addPayment(p).subscribe();
    });

    this.dialogRef.close(paymentsToSave);
  }

}

interface ISelectablePayment {
  selected: boolean,
  payment: IPayment
}
