class BankAccount {
    constructor (sum) {
        this.sum = sum;
    }
    getBalance() {
        return this.sum;
    }
    deposit(amount) {
        this.sum = this.sum + amount;
        return this.sum;
    }
    withdraw(amount) {
        this.sum = this.sum - amount;
        return this.sum;
    }
}

const account1 = new BankAccount(1000);
console.log(account1.getBalance());

account1.deposit(500);
console.log(account1.getBalance());

account1.withdraw(200);
console.log(account1.getBalance());