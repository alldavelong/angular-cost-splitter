import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NaviComponent } from './navi/navi.component';
import { MenuPlusComponent } from './menu-plus/menu-plus.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button'
import { MatMenuModule } from '@angular/material/menu';

import { JournalComponent } from './journal/journal.component';
import { BalanceComponent } from './balance/balance.component';
import { ExpenseComponent } from './expense/expense.component';
import { PaymentComponent } from './payment/payment.component';

import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { MatCommonModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { PaymentFormComponent } from './payment-form/payment-form.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './in-memory-data.service';
import { MatCardModule } from '@angular/material/card';
import { SettlementComponent } from './settlement/settlement.component';


@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    MenuPlusComponent,
    JournalComponent,
    BalanceComponent,
    ExpenseComponent,
    PaymentComponent,
    ExpenseFormComponent,
    PaymentFormComponent,
    SettlementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatTabsModule,
    MatButtonModule,
    MatMenuModule,
    CommonModule,
    MatCommonModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule,
    MatCardModule,
    MatButtonToggleModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ExpenseFormComponent, PaymentFormComponent]

})

export class AppModule { }
