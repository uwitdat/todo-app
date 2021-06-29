const account = {
    name: 'Big Sven',
    expenses: [],
    income: [],

    addExpense: function (des, amnt) {
        this.expenses.push({ description: des, ammount: amnt })
    },
    addIncome: function (des, amnt) {
        this.income.push({ description: des, ammount: amnt })
    }
}

account.addExpense('coffee', 3)
account.addExpense('milk', 10)
account.addExpense('diamond', 100)

account.addIncome('job1', 250)
account.addIncome('job2', 500)
account.addIncome('job3', 1000)

const getAccountSummary = (account) => {
    const expenseArray = []
    const incomeArray = []

    account.expenses.forEach((exp) => {
        let res = exp.ammount
        expenseArray.push(res)
    })

    account.income.forEach((income) => {
        let res = income.ammount
        incomeArray.push(res)
    })

    let expenseSum = expenseArray.reduce((a, b) => a + b)
    let incomeSum = incomeArray.reduce((a, b) => a + b)
    let balance = incomeSum - expenseSum
    return `${account.name} has a balance of $${balance}. $${incomeSum} in income. $${expenseSum} in expenses.`
}

console.log(getAccountSummary(account))
