//Level1
class BankAccount{
    constructor(public ownerName:string,public balance:number){
    }
    displayBalance():void{
        console.log(`Account - ${this.ownerName}, Balance ${this.balance}`);
    }
    //Level2
    deposit(amount: number): void {
        if (amount > 0){
            this.balance += amount;
            console.log(`Deposited: ${amount}. New Balance: ${this.balance}`);
        }
        else{
            console.log("Deposit amount must be positive");
        }
    }

    withdraw(amount: number): void{
        if (amount > 0 && amount <= this.balance){
            this.balance -= amount;
            console.log(`withdrew: ${amount}.New Balance: ${this.balance}`);
        }
        else if (amount > this.balance){
            console.log(`Insufficient funds for witdrawal`)
        }
        else{
            console.log(`Insufficient funds`)
        }
    }
}

const Account1 = new BankAccount("Anukul ", 1000);
Account1.displayBalance();
Account1.deposit(500);
Account1.withdraw(2000);
