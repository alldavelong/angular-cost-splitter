import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const expenses = [
      { id: 1, date: '2022-04-23', spentBy: 'Anton', description: 'Brot', amount: 300 },
      { id: 2, date: '2022-04-23', spentBy: 'Walter', description: 'Milch', amount: 200 },
      { id: 3, date: '2022-04-25', spentBy: 'Xaver', description: 'Honig', amount: 400 },
      { id: 4, date: '2022-05-4', spentBy: 'Dora', description: 'Shirt', amount: 5000 }
    ];
    const payments = [
      { id: 1, date: '2022-05-1', spentBy: 'Anton', amount: 300, receivedBy: 'Xaver' },
      { id: 2, date: '2022-04-28', spentBy: 'Dora', amount: 5000, receivedBy: 'Walter' }
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
