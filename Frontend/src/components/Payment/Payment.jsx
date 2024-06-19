import React from 'react'
import './Payment.css'
import qrcode from '../../assets/qrcode.png'
const Payment = ({processOrder,setShowPayment,setTransactionId,transactionId,setPaid}) => {
    const onChangeHandler = (event)=>{
        setTransactionId(value => event.target.value)
    }
    const onSubmitHandler = ()=>{

        processOrder()
    }
  return (
    
    <div className='payment'>
        <div className="payment-container">
            <h3> Pay by QR or UPI </h3>
            <p>Pay by any UPI app. We suggest entering the Transaction ID after the payment for faster process. We verify Payment manually. </p>
            <div className="qrcontainer">
                <img src={qrcode} alt="" />
            </div>
            <p className='upiid'>upi Id : tomato@ybl</p>
            <hr />
            <input type="text" placeholder='Transcation ID' name='txnid' value={transactionId} onChange={onChangeHandler}/>
            <button onClick={onSubmitHandler}>Paid</button>
            <h5 onClick={()=>setShowPayment(false)}>X</h5>
        </div>
    </div> 
  )
}

export default Payment