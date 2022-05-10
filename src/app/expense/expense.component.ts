import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InputscreenComponent } from '../expense-form/expense-form.component';
import { JournalEntryService } from '../journal-entry.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  @Input() expense: any;

  constructor(
    public dialog: MatDialog,
    private journalEntryService: JournalEntryService
    ) { }

  ngOnInit(): void {
    this.getExpense();
  }

  getExpense() {
    this.journalEntryService.getExpense(this.expense.id);
  }

  onOpenExpense(id: number) {
    let dialogRef = this.dialog.open(InputscreenComponent, {
      data: {
        id: id
      }
    });
  }
}
