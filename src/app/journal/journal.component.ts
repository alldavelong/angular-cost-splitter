import { Component, OnInit } from '@angular/core';
import { EXPENSES } from '../mock-expenses';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {

  expenses = EXPENSES;

  constructor() { }

  ngOnInit(): void {
  }

}
