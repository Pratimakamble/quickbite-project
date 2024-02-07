import React from 'react'
import './Slidebar.css'

export const Slidebar = ({open}) => {
  return (
  
       
        <>
        <div className={open?"Slidebar collaps":"Slidebar"}>
            <div>
                <h2>Save Address Dilivery</h2>
            </div>
            <img src="" alt="" />
           
            <div>
            <label htmlFor="addr">Address</label>
            <input id='addr' type="text" />
            </div>
            <div>
            <label htmlFor="fltno">Door/Flat No</label>
            <input id='fltno' type="text"  />
            </div>
            <div>
            <label htmlFor="ldm">Landmark</label>
            <input id='ldm' type="text" />
            </div>
            <button class="w-24 p-2 m-1">Home</button>
            <button class="w-24 p-2 m-1">Work</button>
            <button class="w-24 p-2 m-1">Other</button>
            <div>
                <label htmlFor="sap">Save Address and Proceed</label>
                <input  id='sap' type="text"/>
            </div>
            </div>

        </>
    )
    


    
 
}
