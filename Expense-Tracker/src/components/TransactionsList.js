import React from 'react'

function TransactionsList(props) {

return (
    <div>
        <h4 className = "headerTags">Transactions:</h4>
        {props.transactionDetails.map(transaction => {
            return <ul className = "listItems" key = {transaction.id}>{transaction.timeStamp}- {transaction.transaction} - {transaction.refType}</ul>
        })}
    </div>
)
}

export default TransactionsList
