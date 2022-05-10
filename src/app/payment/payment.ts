export interface IPayment {
  id: number;
  date: Date;
  spentBy: string;
  amount: number;
  description: string;
}