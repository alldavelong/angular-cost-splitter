import { IJournalEntry } from "../journal/journal.component";

export class Payment implements IJournalEntry {
  id: number;
  date: Date;
  spentBy: string;
  amount: number;
  receivedBy: string;
    
  constructor(id: number, date: Date, spentBy: string, amount: number, receivedBy: string) {
    this.id = id;
    this.date = date;
    this.spentBy = spentBy;
    this.amount = amount;
    this.receivedBy = receivedBy;
  }
  }