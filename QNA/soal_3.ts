// 3. Object-Oriented Programming (OOP)
enum TransactionType {
  DEPOSIT = "DEPOSIT",
  WITHDRAWAL = "WITHDRAWAL",
  TRANSFER = "TRANSFER",
}

class Transaction {
  constructor(
    public readonly transactionId: string,
    public readonly type: TransactionType,
    public readonly amount: number,
    public readonly date: Date,
    public readonly description: string,
  ) {}
}

class Account {
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(
    public readonly accountId: string,
    public readonly owner: string,
  ) {}

  public getBalance(): number {
    return this.balance;
  }

  public deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Deposit amount must be greater than zero.");
    }
    this.balance += amount;
    this.recordTransaction(
      TransactionType.DEPOSIT,
      amount,
      `Deposit of ${amount}`,
    );
  }

  public withdraw(amount: number): void {
    if (amount <= 0) {
      throw new Error("Withdrawal amount must be greater than zero.");
    }
    if (amount > this.balance) {
      throw new Error("Insufficient balance.");
    }
    this.balance -= amount;
    this.recordTransaction(
      TransactionType.WITHDRAWAL,
      amount,
      `Withdrawal of ${amount}`,
    );
  }

  public transfer(amount: number, recipient: Account): void {
    if (amount <= 0) {
      throw new Error("Transfer amount must be greater than zero.");
    }
    if (amount > this.balance) {
      throw new Error("Insufficient balance for transfer.");
    }
    this.withdraw(amount);
    recipient.deposit(amount);
    this.recordTransaction(
      TransactionType.TRANSFER,
      amount,
      `Transfer of ${amount} to account ${recipient.accountId}`,
    );
  }

  private recordTransaction(
    type: TransactionType,
    amount: number,
    description: string,
  ): void {
    const transaction = new Transaction(
      this.generateTransactionId(),
      type,
      amount,
      new Date(),
      description,
    );
    this.transactions.push(transaction);
  }

  public getTransactionHistory(): Transaction[] {
    return this.transactions;
  }

  private generateTransactionId(): string {
    return `TX-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
  }
}

const account1 = new Account("USR001", "Obi mikel");
const account2 = new Account("USR002", "Jaden byon");

try {
  account1.deposit(1000);
  account1.withdraw(200);
  account1.transfer(300, account2);

  console.log("Saldo Akun 1:", account1.getBalance());
  console.log("Saldo Akun 2:", account2.getBalance());
  console.log("Riwayat Transaksi Akun 1:", account1.getTransactionHistory());
} catch (error) {
  console.error("Error:", (error as Error).message);
}
