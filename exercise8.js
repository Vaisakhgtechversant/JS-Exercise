
class BankDetails {
    constructor(firstName, SecondName) {
        this.firstName = firstName;
        this.lastname = SecondName;
        this.balance = 0;
    }
    get fullName(){
        return `${this.firstName} ${this.lastname}`
    }
    deposit(amount){
        if(amount>0){
            this.balance+=amount
            console.log(`final balance is ${this.balance}`);
        }else{
            console.log("invalid amount");
        }
    }
    withdraw(amount){
        if(amount>0 && amount<=this.balance){
            this.balance-+amount;
            console.log(`amount withdraq successfully, ${this.balance}`);
        }else{
            console.log("amount is not able to withdraw");
        }
    }
    checkBalance(){
        console.log(`${this.balance}`);
    }
    transferMoney(targetAccount,amount){
        if(amount>0 && amount <=this.balance){
        this.balance-=amount;
        targetAccount.balance+=amount;
        console.log(`${this.fullName}:Transferred ${targetAccount.fullName}`);                    
        }else{
            console.log("invalid amount for tranferof insuffient balance");
        }
    }
}
const account = new BankDetails("Vaisakh","g")
const account1 = new BankDetails("sam","s")

console.log(account.fullName);
console.log(account1.fullName);
account.deposit(2000);
account1.deposit(1000);
account.checkBalance()
account1.checkBalance()
account.transferMoney(account1,500)
account.withdraw(500)

    