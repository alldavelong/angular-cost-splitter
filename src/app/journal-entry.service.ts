import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Expense } from './expense/expense';
import { IJournalEntry } from './journal/journal.component';
import { MessageService } from './message.service';
import { Payment } from './payment/payment';

@Injectable({
  providedIn: 'root'
})
export class JournalEntryService {
  private expensesUrl = 'api/expenses';
  private paymentsUrl = 'api/payments';

  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService
  ) { }
  
  getExpenses(): Observable<Expense[]> {
    return this.httpClient.get<Expense[]>(this.expensesUrl);
  }

  getPayments(): Observable<Payment[]> {
    return this.httpClient.get<Payment[]>(this.paymentsUrl);
  }
  

  // getJournalEntries(): Observable<IJournalEntry[]> {
  //   let entries = (<IJournalEntry[]>EXPENSES).concat(PAYMENTS);
  //   return of(entries);
  // }
}
