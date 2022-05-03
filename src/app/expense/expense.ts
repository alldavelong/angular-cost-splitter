import { IJournalEntry } from "../journal/journal.component";

export class Expense implements IJournalEntry {
  date: string;
  spentBy: string;
  description: string;
  amount: number;
  
  constructor(date: string, spentBy: string, description: string, amount: number) {
    this.date = date;
    this.spentBy = spentBy;
    this.description = description;
    this.amount = amount;
  }
}