import React, {useState, useRef} from 'react'

function AddExpense(props) {
const [balance, updateBalance] = useState(550)
const [amount, setAmount] = useState(50)
const [valid, setValid] = useState(false)
const btnAddReference = useRef()
const btnRemoveReference = useRef()
    
const amountHandler = (e)=>{
    setAmount(e.target.value)
}

const addHandler = ()=>{
    if(amount){
        updateBalance(prevBalance => {
            return prevBalance + parseInt(amount)
        })
        setAmount('')
        props.onAdd(amount, btnAddReference.current.innerText)
        
    }else{
        setValid(true)
    }
    
}

const removeHandler = ()=>{
    if(amount){
        updateBalance(prevBalance => {
            return prevBalance - parseInt(amount)
        })
        setAmount('')
        props.onAdd(amount, btnRemoveReference.current.innerText)
        setValid(false)
        
    }else{
        setValid(true)
    }
}

const handlerInputValues = (evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
return (
    <div className = "Items">
        <span className = "commontext">Balance : {balance}</span>
        <div>
            <input type = "number" value = {amount} onChange = {amountHandler} onKeyDown = {handlerInputValues}/>
        </div>
        <div>
        <button onClick = {addHandler} ref = {btnAddReference}>Add</button>
        <button onClick = {removeHandler} ref = {btnRemoveReference}>Remove</button>
            
        </div>
    </div>
)
}

export default AddExpense
