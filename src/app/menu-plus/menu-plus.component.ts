import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaymentFormComponent } from '../payment-form/payment-form.component';
import { ExpenseFormComponent } from '../expense-form/expense-form.component';

@Component({
  selector: 'app-menu-plus',
  templateUrl: './menu-plus.component.html',
  styleUrls: ['./menu-plus.component.css']
})
export class MenuPlusComponent implements OnInit {
 

  constructor(public dialog: MatDialog) {
   }

  ngOnInit(): void {
  }

  onSelect(){
    let dialogRef = this.dialog.open(ExpenseFormComponent, {
      height: '40em',
      width: '30em',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    }); 
  }

  onSelectPayment(){
    let dialogRef = this.dialog.open(PaymentFormComponent,{
      height: '40em',
      width: '30em',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    }); 
  }
}
