import { IJournalEntry } from "../journal/journal.component";

export class Payment implements IJournalEntry {
  date: string;
  spentBy: string;
  amount: number;
  receivedBy: string;
    
  constructor(date: string, spentBy: string, amount: number, receivedBy: string) {
    this.date = date;
    this.spentBy = spentBy;
    this.amount = amount;
    this.receivedBy = receivedBy;
  }
  }