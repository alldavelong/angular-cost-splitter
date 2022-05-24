import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const expenses = [
      { id: 1, date: '2022-04-23', spentBy: 'Anton', description: 'Brote', amount: 1300 },
      { id: 2, date: '2022-04-23', spentBy: 'Walter', description: 'Milch', amount: 400 },
      { id: 3, date: '2022-04-25', spentBy: 'Xaver', description: 'Honig', amount: 1000 },
      { id: 4, date: '2022-05-04', spentBy: 'Dora', description: 'Heizöl', amount: 5000 }
    ];
    const payments = [
      { id: 1, date: '2022-04-28', spentBy: 'Walter', amount: 200, receivedBy: 'Anton' },
      { id: 2, date: '2022-05-10', spentBy: 'Xaver', amount: 1200, receivedBy: 'Dora' }
    ];
    const users = [
      { id: 1, name: 'Anton' },
      { id: 2, name: 'Dora' },
      { id: 3, name: 'Xaver' },
      { id: 4, name: 'Walter' }
    ];
    return { expenses, payments, users };
  }

  constructor() { }
}
