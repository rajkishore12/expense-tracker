
import './App.css';
import AddExpense from './components/AddExpense';
import TransactionsList from './components/TransactionsList';
import {useState} from 'react'
import './ExpenseTracker.css'
function App() {

  const [trasactions, setTransactions] = useState([])

  const trasactionsList = (transaction, refType)=>{
    setTransactions((prevUsersList)=>{
      return [...prevUsersList, 
        {transaction: ""+transaction, id:Math.random().toString() , refType: refType, timeStamp: new Date().toISOString()}] //
    })
  }
  return (
    <div className = "containerstyle">
      <div className = "Parent">
          <h1>Expense Tracker - Basic</h1> 
          <div className = "AddExpense">
            <AddExpense onAdd = {trasactionsList}/>
          </div>

          <div className = "TransactionList">

            <TransactionsList transactionDetails = {trasactions}/>
          </div>
          
          </div>
    </div>
  );
}

export default App;
