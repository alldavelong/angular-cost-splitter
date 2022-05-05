import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NaviComponent } from './navi/navi.component';
import { MenuPlusComponent } from './menu-plus/menu-plus.component';
import { FormComponent } from './form/form.component';


import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button'
import { MatMenuModule } from '@angular/material/menu'; 

import { JournalComponent } from './journal/journal.component';
import { BalanceComponent } from './balance/balance.component';
import { ExpenseComponent } from './expense/expense.component';
import { PaymentComponent } from './payment/payment.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    MenuPlusComponent,
    FormComponent,
    JournalComponent,
    BalanceComponent,
    ExpenseComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatTabsModule,
    MatButtonModule,
    MatMenuModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
