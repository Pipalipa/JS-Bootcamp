let myAccount  = {
    name: 'Andrew',
    expenses: 0,
    income: 0
}
let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount 
    console.log(account.expenses)
}

// addExpense(myAccount, 2.50)
// console.log(myAccount)

// addIncome (1)TAKE THE ACCOUNT TO MANIPULATE (wich account are we tryng to add income for and also take the ammount of incame we are tryng to add)
let addIncome = function (account, newincome) {
    account.income = account.income + newincome
    // console.log(myAccount, account.income)
    // return account.income
}
// addIncome(myAccount, 100)
// console.log(myAccount)

// resetAccount (2) rest the expenses and the income for the account to change. We still need to know wich account to change but that's the only arg . because we use the static zero for the value of bouth prop. 
let resetAccount = function (account) {
    myAccount = account, account.expenses=0, account.income=0

    // console.log(account)
}
// resetAccount(myAccount)
// console.log('>>>>', myAccount)
// getAccountSummary (3) summary of teh account - current account bonce, total expenses and income

let getbalance= function (Account) {
    const sumGetAccountSummary = Account.income - Account.expenses
    return sumGetAccountSummary
}

// otherAccount.income = 80;
// otherAccount.expenses = 20

// console.log ('####', getbalance(otherAccount))

let getAccountSummary = function (Account) {
    const sumGetAccountSummary = `Account for ${Account.name} has $${getbalance(Account)} balance. $${Account.income} in income. $${Account.expenses} in expenses`
    return sumGetAccountSummary
}
const Summary = getAccountSummary(otherAccount)
// console.log(Summary)
// example
//  Account for Andrew(account name) has $900(Accountbouce). $1000(Income) in income. $100(expenses) in expenses.


// addIncome
// addExpense
// addExpense
// getAccountSummary
// resetAccount
// getAccountSumary (printed)
    
// addExpense(myAccount, 2.50)
// console.log(myAccount)


addIncome(myAccount, 2000)
addExpense(myAccount, 2.5)
addExpense(myAccount, 160)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))