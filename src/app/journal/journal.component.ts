import { Component, OnInit } from '@angular/core';
import { EXPENSES, PAYMENTS } from '../mock-expenses';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {

  expenses = EXPENSES;
  payments = PAYMENTS;

  constructor() { }

  ngOnInit(): void {
  }
}

export interface IJournalEntry {
  spentBy: string;
  amount: number;
}
