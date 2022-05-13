import { Component, OnInit } from '@angular/core';
import { IExpense } from '../expense/expense';
import { JournalEntryService } from '../journal-entry.service';
import { IPayment } from '../payment/payment';
import { IUser } from '../user';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  expenses: IExpense[] = [];
  payments: IPayment[] = [];
  users: IUser[] = [];

  balanceByUser: { [userName: string]: number } = {};

  constructor(
    private journalEntryService: JournalEntryService
  ) { }

  ngOnInit(): void {
    this.getExpenses();
    this.getPayments();
    this.getUsers();
  }

  getExpenses(): void {
    this.journalEntryService.getExpenses()
      .subscribe(expenses => this.expenses = expenses);
  }

  getPayments(): void {
    this.journalEntryService.getPayments()
      .subscribe(payments => this.payments = payments);
  }

  getUsers(): void {
    this.journalEntryService.getUsers()
      .subscribe(users => this.users = users);
  }

  getBalance(userName: string): number {
    if (Object.keys(this.balanceByUser).length == 0) { // is dictionary empty?
      this.calculateBalances();
    }
    return this.balanceByUser[userName];
  }

  calculateBalances(): void {
    let totalExpenses = 0;
    let expensesPerUser: { [userName: string]: number } = {};
    let payedPerUser: { [userName: string]: number} = {};

    this.users.forEach(user => {
      expensesPerUser[user.name] = 0;
      payedPerUser[user.name] = 0;
    });

    this.expenses.forEach(expense => {
      totalExpenses += expense.amount;
      expensesPerUser[expense.spentBy] += expense.amount;
    });
    
    const evenExpenseShare = totalExpenses / this.users.length;
    
    this.payments.forEach(payment => {
      payedPerUser[payment.spentBy] += payment.amount;
      payedPerUser[payment.receivedBy] -= payment.amount;
    });

    this.users.forEach(user => {
      if (this.balanceByUser == undefined) { this.balanceByUser = {}; }
      this.balanceByUser[user.name] = evenExpenseShare - expensesPerUser[user.name] - payedPerUser[user.name];
    });
  }

}
