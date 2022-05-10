import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IExpense } from './expense/expense';
import { MessageService } from './message.service';
import { IPayment } from './payment/payment';

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

  getExpenses(): Observable<IExpense[]> {
    return this.httpClient.get<IExpense[]>(this.expensesUrl);
  }

  getPayments(): Observable<IPayment[]> {
    return this.httpClient.get<IPayment[]>(this.paymentsUrl);
  }

  getExpense(id: number): Observable<IExpense> {
    const url = `${this.expensesUrl}/${id}`;
    return this.httpClient.get<IExpense>(url);
  }

  updateExpense(expense: IExpense): Observable<any> {
    return this.httpClient.put(this.expensesUrl, expense, this.httpOptions);
  }

  addExpense(expense: IExpense): Observable<IExpense> {
    return this.httpClient.post<IExpense>(this.expensesUrl, expense, this.httpOptions);
  }

  deleteExpense(id: number): Observable<IExpense> {
    const url = `${this.expensesUrl}/${id}`;
    return this.httpClient.delete<IExpense>(url, this.httpOptions);
  }
}
