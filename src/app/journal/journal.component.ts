import { Component, OnInit } from '@angular/core';
import { IExpense } from '../expense/expense';
import { IPayment } from '../payment/payment';
import { JournalEntryService } from '../journal-entry.service';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {

  expenses: IExpense[] = [];
  payments: IPayment[] = [];

  constructor(private journalEntryService: JournalEntryService) { }

  ngOnInit(): void {
    this.getPayments();
    this.getExpenses();
  }

  getPayments(): void {
    this.journalEntryService.getPayments().subscribe(payments => this.payments = payments);
  }
  getExpenses(): void {
    this.journalEntryService.getExpenses().subscribe(expenses => this.expenses = expenses);
  }

  sortedEntries(): IMixedEntry[] {
    const expenses: IMixedEntry[] = this.expenses.map(e => {return {date: new Date(e.date), expense: e}});
    const payments: IMixedEntry[] = this.payments.map(p => {return {date: new Date(p.date), payment: p}});
    return expenses.concat(payments).sort((b,a) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }
  
  addExpense(expense: IExpense) {
    this.expenses.push(expense);
  }

  addPayment(payment: IPayment) {
    this.payments.push(payment);
  }
}

interface IMixedEntry {
  date: Date;
  expense?: IExpense;
  payment?: IPayment;
}
