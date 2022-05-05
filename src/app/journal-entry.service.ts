import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Expense } from './expense/expense';
import { IJournalEntry } from './journal/journal.component';
import { EXPENSES, PAYMENTS } from './mock-expenses';
import { Payment } from './payment/payment';

@Injectable({
  providedIn: 'root'
})
export class JournalEntryService {

  constructor() { }

  getPayments(): Observable<Payment[]> {
    return of(PAYMENTS);
  }

  getExpenses(): Observable<Expense[]> {
    return of(EXPENSES);
  }

  // getJournalEntries(): Observable<IJournalEntry[]> {
  //   let entries = (<IJournalEntry[]>EXPENSES).concat(PAYMENTS);
  //   return of(entries);
  // }
}
