import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceComponent } from './balance/balance.component';
import { JournalComponent } from './journal/journal.component';

const routes: Routes = [
  {path: '', redirectTo: '/balance', pathMatch: 'full'},
  {path: 'balance', component: BalanceComponent},
  {path: 'journal', component: JournalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
