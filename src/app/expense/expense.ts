import { IJournalEntry } from "../journal/journal.component";

export class Expense implements IJournalEntry {
  id: number;
  date: Date;
  spentBy: string;
  description: string;
  amount: number;
  
  constructor(id: number, date: Date, spentBy: string, description: string, amount: number) {
    this.id = id;
    this.date = date;
    this.spentBy = spentBy;
    this.description = description;
    this.amount = amount;
  }
}