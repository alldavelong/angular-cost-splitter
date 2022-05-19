import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private journalEntryService: JournalEntryService
  ) { }

  ngOnInit(): void {
    this.suggestedPayments = this.data.suggestedPayments;
  }

}
