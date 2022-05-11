export interface IPayment {
  id: number;
  date: Date;
  amount: number;
  spentBy: string;
  receivedBy: string;
}