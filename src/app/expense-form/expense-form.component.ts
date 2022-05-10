import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IExpense } from '../expense/expense';
import { JournalEntryService } from '../journal-entry.service';
import { IUser } from '../user';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class InputscreenComponent implements OnInit {

  expense?: IExpense;
  users?: IUser[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private journalEntryService: JournalEntryService
    ) { }

  ngOnInit(): void {
    this.getExpense();
    this.getUsers();
  }

  getExpense() {
    this.journalEntryService.getExpense(this.data.id)
      .subscribe(expense => this.expense = expense);
  }

  getUsers() {
    this.journalEntryService.getUsers()
      .subscribe(users => this.users = users);
  }

  formattedDate() {
    if (this.expense) {
      return new Date(this.expense.date).toISOString().split('T')[0];
    } else {
      return '';
    }
  }

}


