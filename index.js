let accountBalance = 6500;
const checkMinBalance = withdrawalAmt => withdrawalAmt < accountBalance;
const pin = inputPin => inputPin === 1568;
const balance = () => "Your balance is currently: $" + accountBalance;
const deposit = (amount, pinCheck) => {
    if (pinCheck) {
        console.log("Depositing: $" + amount);
        accountBalance += amount;
        return true;
    } else {
        return false;
    }
};
if (deposit(50, pin(1568))) {
    console.log(balance());
}

const withdraw = (amount, pinCheck) => {
    if (pinCheck && checkMinBalance(amount)) {
        console.log("Withdrawing: $" + amount);
        accountBalance -= amount;
        return true;
    } else {
        return false;
    }
};
if (withdraw(1200, pin(1568))) {
    console.log(balance());
}


const greeting = (name) =>
    "Welcome to your automated banking portal, " + name + ".";

console.log(greeting("Jane"));
console.log(balance());
if (deposit(50)) {
    console.log(balance());
}
if (withdraw(1200)) {
    console.log(balance());
}
if (withdraw(6600)) {
    console.log(balance());
}