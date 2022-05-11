import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IExpense } from '../expense/expense';
import { JournalEntryService } from '../journal-entry.service';
import { IUser } from '../user';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent implements OnInit {

  expense?: IExpense;
  users?: IUser[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ExpenseFormComponent>,
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

  save(spentBy: string, date: string, description: string, amount: string): void {
  if (this.expense) {
      this.expense.spentBy = spentBy;
      this.expense.date = new Date(date);
      this.expense.description = description;
      this.expense.amount = Number.parseInt(amount) * 100;

      this.journalEntryService.updateExpense(this.expense)
        .subscribe();
      this.dialogRef.close(this.expense);
    }
  }

}


