import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExpenseFormComponent } from '../expense-form/expense-form.component';
import { JournalEntryService } from '../journal-entry.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  @Input() expense: any;

  constructor(
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {}

  openExpenseForm(id: number) {
    let dialogRef = this.dialog.open(ExpenseFormComponent, {
      data: {
        id: id
      }
    })
      .afterClosed().subscribe(result => {
        if (!result) {return;}
        this.expense.spentBy = result.spentBy;
        this.expense.date = result.date;
        this.expense.description = result.description;
        this.expense.amount = result.amount;
      });
  }
}
