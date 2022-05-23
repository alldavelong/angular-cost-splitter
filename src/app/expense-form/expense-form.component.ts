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
  isNew: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ExpenseFormComponent>,
    private journalEntryService: JournalEntryService
    ) { }

  ngOnInit(): void {
    this.getUsers();
    if (this.data) {
      this.getExpense();
    } else {
      this.isNew = true;
      this.expense = {
        date: new Date().toISOString().split('T')[0],
        spentBy: '',
        description: '',
        amount: 0
      }
    }
  }

  getExpense() {
    this.journalEntryService.getExpense(this.data.id)
      .subscribe(expense => this.expense = expense);
  }

  getUsers() {
    this.journalEntryService.getUsers()
      .subscribe(users => this.users = users);
  }


  save(spentBy: string, date: string, description: string, amount: string): void {
    if (spentBy == 'choose' || date == '' || description == '' || amount == '') {
      window.alert('Bitte alle Felder ausfüllen!');
      return;
    }

    if (!this.expense) {return;}
    this.expense.spentBy = spentBy;
    this.expense.date = date;
    this.expense.description = description;
    this.expense.amount = Number.parseInt(amount) * 100;
    
    if (this.isNew) {
      this.journalEntryService.addExpense(this.expense).subscribe();
    } else {
      this.journalEntryService.updateExpense(this.expense)
      .subscribe();
    }
    this.dialogRef.close(this.expense);
  }

}


