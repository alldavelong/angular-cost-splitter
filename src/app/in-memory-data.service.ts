import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const expenses = [
      { id: 1, date: '1.1.2000', spentBy: 'Anton', description: 'Brot', amount: 300 },
      { id: 2, date: '1.1.2000', spentBy: 'Walter', description: 'Milch', amount: 200 },
      { id: 3, date: '1.1.2000', spentBy: 'Xaver', description: 'Honig', amount: 400 },
      { id: 4, date: '1.1.2000', spentBy: 'Dora', description: 'Shirt', amount: 5000 }
    ];
    const payments = [
      { id: 1, date: '1.1.2000', spentBy: 'Anton', amount: 300, receivedBy: 'Xaver' },
      { id: 2, date: '1.1.2000', spentBy: 'Dora', amount: 5000, receivedBy: 'Walter' }
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
