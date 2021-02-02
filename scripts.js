const Modal = {
  open(){
    // todo objeto tem propriedades e funcionalidades
    document
      .querySelector('.modal-overlay')//funcionalidade
      .classList//propriedade
      .add('active');
  },
  close(){
    document.querySelector('.modal-overlay').classList.remove('active');
  }
}

const transactions = [
  {
    id: 1,
    description: 'Luz',
    amount: -50000,
    date: '23/01/2021'
  },
  {
    id: 2,
    description: 'Website',
    amount: 50000,
    date: '23/01/2021'
  },
  {
    id: 3,
    description: 'Internet',
    amount: -20000,
    date: '23/01/2021'
  },]

const Transaction = {
  incomes() {
    //somar as entradas
    let income = 0;
    transactions.forEach(transaction => {
      if (transaction.amount > 0) {
        income += transaction.amount;
      }
    })

    return income
  },
  expenses() {
    //somar as saídas
    let expense = 0;
    transactions.forEach(transaction => {
      if (transaction.amount < 0) {
        expense += transaction.amount;
      }
    })

    return expense
  },
  total() {
    //entradas - Saídas
    return Transaction.incomes() + Transaction.expenses()
  }
}

const DOM = {
  transactionsContainer: document.querySelector(`#data-table tbody`),


  addTransaction(transaction, index) {
    const tr = document.createElement('tr');
    tr.innerHTML = DOM.innerHTMLTransaction(transaction);

    DOM.transactionsContainer.appendChild(tr);

  },
  innerHTMLTransaction(transaction){
    const CSSclass = transaction.amount > 0 ? "income" : "expense";

    const amount = Utils.formatCurrency(transaction.amount);

    const html = `
        <td class="description">${transaction.description}</td>
        <td class="${CSSclass}">${amount}</td>
        <td class="date">${transaction.date}</td>
        <td>
          <img src="./assets/minus.svg" alt="Remover transação">
        </td>
      `
      return html;
  },
  updateBalance() {
    document.
      getElementById('incomesDisplay')
      .innerHTML = Utils.formatCurrency(Transaction.incomes());
    document.
      getElementById('expensesDisplay')
      .innerHTML = Utils.formatCurrency(Transaction.expenses());
    document.
      getElementById('totalsDisplay')
      .innerHTML = Utils.formatCurrency(Transaction.total());
  }
}

const Utils = {
  formatCurrency(value) {
    const signal = Number(value) < 0 ? "-" : ""

    value = String(value).replace(/\D/g, "")

    value = Number(value) / 100

    value = value.toLocaleString("pr-BR", {
      style: "currency",
      currency: "BRL"
    })

    return signal + value
  }
}

transactions.forEach(function (transaction){
  DOM.addTransaction(transaction);
});

DOM.updateBalance();


