import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

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

  getExpense(id: number): Observable<Expense> {
    const url = `${this.expensesUrl}/${id}`;
    return this.httpClient.get<Expense>(url);
  }

  updateExpense(expense: Expense): Observable<any> {
    return this.httpClient.put(this.expensesUrl, expense, this.httpOptions);
  }

  addExpense(expense: Expense): Observable<Expense> {
    return this.httpClient.post<Expense>(this.expensesUrl, expense, this.httpOptions);
  }

  deleteExpense(id: number): Observable<Expense> {
    const url = `${this.expensesUrl}/${id}`;
    return this.httpClient.delete<Expense>(url, this.httpOptions);
  }

  // getJournalEntries(): Observable<IJournalEntry[]> {
  //   let entries = (<IJournalEntry[]>EXPENSES).concat(PAYMENTS);
  //   return of(entries);
  // }
}
