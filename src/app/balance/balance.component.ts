import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IExpense } from '../expense/expense';
import { JournalEntryService } from '../journal-entry.service';
import { IPayment } from '../payment/payment';
import { SettlementComponent } from '../settlement/settlement.component';
import { IUser } from '../user';
import { BalanceCalculator } from './balance-calculator';

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
  suggestedPayments: IPayment[] = [];

  constructor(
    private journalEntryService: JournalEntryService,
    public dialog: MatDialog
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
      this.calculateBalance();
    }
    return this.balanceByUser[userName];
  }

  calculateBalance() {
    let bc = new BalanceCalculator(this.users, this.expenses, this.payments);
    this.balanceByUser = bc.calculateBalances();
    this.suggestedPayments = bc.calculateSuggestedPayments();
  }

  update(x: any) {
    this.users = [];
    this.expenses = [];
    this.payments = [];
    this.balanceByUser = {};
    this.ngOnInit();
  }

  showSettlement(){
    let dialogRef = this.dialog.open(SettlementComponent,{
      height: 'auto',
      width: '30em',
      data: {
        suggestedPayments: this.suggestedPayments
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {return;}
      this.update(result);
      
    }); 
  }

}
