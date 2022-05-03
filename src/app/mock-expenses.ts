import { Expense } from "./expense/expense";
import { Payment } from "./payment/payment";

export const EXPENSES: Expense[] = [
    {date: '1.1.2000', spentBy: 'Anton', description: 'Brot', amount: 300},
    {date: '1.1.2000', spentBy: 'Berta', description: 'Milch', amount: 200},
    {date: '1.1.2000', spentBy: 'Cäsar', description: 'Honig', amount: 400},
    {date: '1.1.2000', spentBy: 'Dora', description: 'Shirt', amount: 5000},
];

export const PAYMENTS: Payment[] = [
    {date: '1.1.2000', spentBy: 'Anton', amount: 300, receivedBy: 'Xaver'},
    {date: '1.1.2000', spentBy: 'Dora', amount: 5000, receivedBy: 'Walter'},
];