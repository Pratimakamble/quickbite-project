import React, { useState } from 'react'
import './Address.css'
import AddressBox from './AddressBox'
const Address = () => {
  const [isClicked,setIsClicked] = useState(false)
  return (
    <>
    <div class="w-75 h-96">
        
        {!isClicked ?
        <div className='address-box w-full h-full'>
            <h2>Add a delivery address</h2>
            <div className='box'>
             
                <h3>Add New Address</h3>
                <button  className='btn' onClick={()=>{
                  setIsClicked(!isClicked)
                }}>Add New </button>
               
            </div>
        </div>
          :
        <AddressBox/>
}



















        <div className='payment'>
                 Payment
    </div>
    </div>
   
   
    </>
  )
}

export default Address