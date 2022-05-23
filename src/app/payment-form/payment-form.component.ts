import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IExpense } from '../expense/expense';
import { JournalEntryService } from '../journal-entry.service';
import { IPayment } from '../payment/payment';
import { IUser } from '../user';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {

  payment?: IPayment;
  users?: IUser[];
  isNew: boolean = false;
  expense?: IExpense;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<PaymentFormComponent>,
  private journalEntryService: JournalEntryService
  ) { }

  ngOnInit(): void {
    this.getUsers();
    if (this.data) {
      this.getPayment();
    } else {
      this.isNew = true;
      this.payment = {
        date: new Date().toISOString().split('T')[0],
        spentBy: '',
        receivedBy: '',
        amount: 0,
      }
    }
  }

  getPayment() {
    this.journalEntryService.getPayment(this.data.id)
      .subscribe(payment => this.payment = payment);
  }

  getExpense(){
    this.journalEntryService.getExpense(this.data.id)
    .subscribe(expense => this.expense = expense);
  }

  getUsers() {
    this.journalEntryService.getUsers()
      .subscribe(users => this.users = users);
  }


  save(spentBy: string, receivedBy: string, date: string, amount: string): void {
    if (spentBy == 'choose' || date == '' || amount == '' || receivedBy == 'choose') {
      window.alert('Bitte alle Felder ausfüllen!');
      return;
    }

    if (!this.payment) {return;}
    this.payment.spentBy = spentBy;
    this.payment.date = date;
    this.payment.receivedBy = receivedBy;
    this.payment.amount = Number.parseFloat(amount) * 100;
    
    if (this.isNew) {
      this.journalEntryService.addPayment(this.payment).subscribe();
    } else {
      this.journalEntryService.updatePayment(this.payment)
      .subscribe();
    }
    this.dialogRef.close(this.payment);
  }

}
