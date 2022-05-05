import { Component, OnInit } from '@angular/core';
import { Expense } from '../expense/expense';
import { JournalEntryService } from '../journal-entry.service';
import { Payment } from '../payment/payment';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {

  expenses: Expense[] = [];
  payments: Payment[] = [];

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
}

export interface IJournalEntry {
  spentBy: string;
  amount: number;
}
