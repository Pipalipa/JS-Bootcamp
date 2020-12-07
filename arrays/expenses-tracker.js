const account = {
    name: 'Andrew Mead',
    expenses: [],
    income: [],
    addExpenses: function (expensesName, value) {
        return this.expenses.push({
            expensesName,
            value
        });
    },
    getAccountSummary: function (account) {
        let totalValue = 0
        let totalIncome = 0
        let accountBalance = 0

        this.expenses.forEach(element => {
            totalValue += element.value
        });

        this.income.forEach(function(income){
            totalIncome = totalIncome + income.ammount
            console.log(income.ammount)
        });

        accountBalance = totalIncome - totalValue

        const message = `${account.name} a balance of $${accountBalance}. ${totalIncome} in income. ${totalValue} in expenses.`
        return message
    },
    addIncome: function (description, ammount) {
        this.income.push({
            description: description,
            ammount: ammount 
        });
    }
}
// Part II

// 1. add income array to account -> income []
// 2. addIncome methode -> description, ammount
// 3. Tweak getAccountSummary balance)

//  Andrew Mead has a balance of $10. $100 in income. $90 in expenses.

// account.addExpenses('Rent', 950)
// account.addExpenses('Coffee', 4)
// console.log (account.getAccountSummary (account))

account.addExpenses('Rent', 950)
account.addExpenses('Coffee', 2)
account.addIncome('job', 1000)
console.log (account.getAccountSummary (account))

// const getAccountSummary = function () {

//     return {
//         name: account2.user.name,
//         expenses: account2.user.expenses,
//     }
// }


// const summary = account.addExpenses();
// console.log(account);


// console.log(account.addExpenses('Rent', 950))
// Expense -> description, amount 
// function addExpense (description, amount) add new object in the expenses array with currect data  
// function getAccountSummary total up all expenses print -> Andrew (account name) Mead has $1250(total we have to calculate) use for each to go to the all expenses arrany get the ammount object and add it to a variable and then we can add it in the template sting in exepenses )

// account.addExpenses('Rent', 950)
// account.addExpenses('Coffee', 2)
// console.log(account.getAccountSummary())


// console.log(addExpenses)