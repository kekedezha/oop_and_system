/**
 * Design two classes: BankAccount and Bank.
 *
 * 🏦 BankAccount Properties:
 *  - accountNumber (string)
 *  - owner (string)
 *  - balance (number)
 *  - type: "Checking" | "Savings"
 * 📘 BankAccount Methods:
 *  - deposit(amount: number): void
 *  - withdraw(amount: number): void
 *  - getBalance(): number
 *  - transferFunds(targetAccount: BankAccount, amount: number): void — allows one account to transfer to another
 *
 *
 * 🏢 Bank Properties:
 *  - name (string)
 *  - accounts (array of BankAccounts)
 * 🧠 Bank Methods:
 *  - addAccount (account: BankAccount): void
 *  - getAccount (accountNumber: string): BankAccount | undefined
 *  - getTotalAssets(): number
 *  - filterAccountsByType(type: "Checking" | "Savings"): BankAccount[]
 *  - getTopAccounts(n: number): BankAccount[]
 */
type BankAccountType = "Checking" | "Savings";

class BankAccount {
  accountNumber: string;
  owner: string;
  balance: number;
  type: BankAccountType;

  constructor(
    accountNumber: string,
    owner: string,
    balance: number,
    type: BankAccountType
  ) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.balance = balance;
    this.type = type;
  }

  // Method to deposit money into bank account
  /**
   * WILL WANT TO CHECK AMOUNT IS A POSITIVE AMOUNT
   */
  deposit(amount: number): void {
    this.balance += amount;
  }

  // Method to withdraw money from bank account - cannot be more than available balance
  /**
   * WILL WANT TO CHECK AMOUNT IS A POSITIVE AMOUNT
   */
  withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log(
        "Cannot withdraw more than available balance! Please try again."
      ); // Print out to console if error for now
      return;
    }
    this.balance -= amount;
  }

  // Method to get current balance of bank account
  getBalance(): number {
    return this.balance;
  }

  // Method to transfer funds from one bank account to another
  transferFunds(targetAccount: BankAccount, amount: number): void {
    if (amount > this.balance) {
      console.log(
        "Cannot withdraw more than available balance. Please try again."
      );
      return;
    }
    this.withdraw(amount);
    targetAccount.deposit(amount);
  }
}

class Bank {
  name: string;
  accounts: BankAccount[];

  constructor(name: string) {
    this.name = name;
    this.accounts = [];
  }

  // Method to add account to person's bank
  /**
   * WILL PROBABLY WANT TO ADD A CHECK TO MAKE SURE ACCOUNT NUMBER IS UNIQUE
   */
  addAccount(account: BankAccount): void {
    this.accounts.push(account);
  }

  // Method to get account based off account number
  getAccount(accountNumber: string): BankAccount | undefined {
    return this.accounts.find(
      (account) => account.accountNumber === accountNumber
    );
  }

  // Method to get total balance across all accounts
  getTotalAssets(): number {
    return this.accounts.reduce(
      (total, account) => total + account.getBalance(),
      0
    );
  }

  // Method to get all accounts that are either "Checking" or "Savings" accounts
  filterAccountsByType(type: BankAccountType): BankAccount[] {
    return this.accounts.filter((account) => account.type === type);
  }

  // Method to get top 'n' accounts
  getTopAccounts(n: number): BankAccount[] {
    return [...this.accounts]
      .sort((a: BankAccount, b: BankAccount) => b.getBalance() - a.getBalance())
      .slice(0, n);
  }
}
