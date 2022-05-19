import { IExpense } from "../expense/expense";
import { IPayment } from "../payment/payment";
import { IUser } from "../user";

export class BalanceCalculator {
    users: IUser[];
    expenses: IExpense[];
    payments: IPayment[];
    balanceByUser: { [userName: string]: number };

    constructor(users: IUser[], expenses: IExpense[], payments: IPayment[]) {
        this.users = users;
        this.expenses = expenses;
        this.payments = payments;
        this.balanceByUser = {};
    }

    calculateBalances(): { [userName: string]: number } {
        let totalExpenses = 0;
        let expensesPerUser: { [userName: string]: number } = {};
        let payedPerUser: { [userName: string]: number} = {};
    
        this.users.forEach(user => {
          expensesPerUser[user.name] = 0;
          payedPerUser[user.name] = 0;
        });
    
        this.expenses.forEach(expense => {
          totalExpenses += expense.amount;
          expensesPerUser[expense.spentBy] += expense.amount;
        });
        
        const evenExpenseShare = totalExpenses / this.users.length;
        
        this.payments.forEach(payment => {
          payedPerUser[payment.spentBy] += payment.amount;
          payedPerUser[payment.receivedBy] -= payment.amount;
        });
    
        this.users.forEach(user => {
            this.balanceByUser[user.name] = -(evenExpenseShare - expensesPerUser[user.name] - payedPerUser[user.name]);
        });

        // this.calculateSuggestedPayments();
        return this.balanceByUser;
      }

    calculateSuggestedPayments(): IPayment[] {
        if (this.balanceByUser == {}) {this.calculateBalances();}
        
        let suggestedPayments: IPayment[] = [];
        
        let payers = Object.entries(this.balanceByUser).filter(([key, val]) => val < 0);
        let receivers = Object.entries(this.balanceByUser).filter(([key, val]) => val > 0);
        
        // payers.map(([key, val]) => console.log(key, ': ', val));
        // let count = 0;

        while (payers.length > 0 || receivers.length > 0) {
            payers.sort((a, b) => a[1] - b[1]); // descending
            receivers.sort((a, b) => b[1] - a[1]); // ascending

            payers.map(([key, val]) => console.log(key, ': ', val));
            receivers.map(([key, val]) => console.log(key, ': ', val));

            let currentPayer = payers[0]; // highest payer
            let possibleReceiver;
            let possibleAmount = 0;

            for (let i = 0; i < receivers.length; i++) {
                if (Math.abs(receivers[i][1]) < Math.abs(currentPayer[1])) { // doesn't need the whole payment
                    if (i + 1 == receivers.length) {
                        possibleAmount = receivers[i][1] // can only receive a part - but must, because no one is left
                    } else {
                        continue; // skip
                    }
                } else { // can receive the whole payment
                    possibleAmount = currentPayer[1];
                }
                possibleReceiver = receivers[i];
                break;
            }

            if (possibleReceiver != undefined) {
                let newPayment: IPayment = {
                    id: 0,
                    date: new Date().toISOString().split('T')[0],
                    amount: Math.abs(possibleAmount),
                    spentBy: currentPayer[0],
                    receivedBy: possibleReceiver[0]
                }
                possibleReceiver[1] -= newPayment.amount;
                currentPayer[1] += newPayment.amount;
                console.log(newPayment);
                suggestedPayments.push(newPayment);
            }
                
            payers = payers.filter(payer => payer[1] != 0);
            receivers = receivers.filter(receiver => receiver[1] != 0);

           
            // count += 1;
            // if (count > 3) {break;}

        }

        console.log(suggestedPayments);
        return suggestedPayments;
    }
}

// TODO does this work?
export interface IBalanceByUser {
    [userName: string]: number
}