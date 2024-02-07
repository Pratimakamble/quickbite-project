import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
const AddressBox = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

      const handleSubmitBtn =(data)=>{
        if (data.Address && data.city && data.Landmark) {
            alert(`successfully saved ${data}`)
            console.log(data)
            reset() 
        }

        alert("Data Not entered ")
       
      }
      const [homeClicked,setHomeClicked] =  useState(false)
      const [workClicked,setWorkClicked] =  useState(false)
      const [otherClicked,setOtherClicked] =  useState(false)
    return(
        <>
        <div className='w-full h-full relative flex justify-start items-center gap-5 shadow-lg p-5'>
            <div className='absolute top-5 left-[30%] text-3xl font-bold text-orange-400'>Save delivery address</div>
            <div className='gmap w-72 h-60 border-2'>
                <img className='w-full h-full overflow-hidden' src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*DMEPtaZPmIjdwALQSbMcaA.jpeg" alt="" />
            </div>
            <form className='pt-2 w-96' onSubmit={handleSubmit((data) =>handleSubmitBtn(data))}>
                <div className='w-full py-2 border-[1px] my-2 border-orange-400'>
                    <input {...register('Address')} className='w-full outline-none' type="text" placeholder='Enter your Address'/>
                </div>
                <div className='w-full  my-2 py-2 border-[1px] border-orange-400'>
                    <input {...register('city')} className='w-full outline-none' type="text" placeholder='Enter your city'/>
                </div>
                <div className='w-full py-2  my-2 border-[1px] border-orange-400'>
                    <input {...register('landmark')} className='w-full outline-none' type="text" placeholder='Enter Landmark'/>
                </div>
                <div className='w-full flex  my-2 h-10 border-2 border-orange-400 relative'>
                    
                  { otherClicked && <input {...register('others')} type="text" className='w-full h-full absolute outline-none border-[1px]' placeholder='Dads home ,friends home' />}

                    <div onClick={()=>{
                        setHomeClicked(!homeClicked)
                        setOtherClicked(false)
                        setWorkClicked(false)
                    }} className={`w-1/3 text-center pt-1 h-full hover:bg-orange-400 hover:text-white hover:font-semibold cursor-pointer ${homeClicked?"bg-orange-400":""}`}>Home</div>
                    
                    <div onClick={()=>{
                        setHomeClicked(false)
                        setOtherClicked(false)
                        setWorkClicked(!workClicked)
                    }}  className={`w-1/3 text-center pt-1 border-l h-full hover:bg-orange-400 hover:text-white hover:font-semibold cursor-pointer ${workClicked?"bg-orange-400":""}`}>Work</div>
                    
                    <div onClick={()=>{
                        setHomeClicked(false)
                        setOtherClicked(!otherClicked)
                        setWorkClicked(false)
                    }}  className={`w-1/3 text-center pt-1 border-l h-full hover:bg-orange-400 hover:text-white hover:font-semibold cursor-pointer ${otherClicked?"bg-orange-400":""}`}>Others</div>
                </div>

                <div className='w-full rounded-lg bg-orange-400 text-white font-semibold hover:bg-orange-500 transition-all ease-in-out duration-200 py-2 '>
                    <input className='w-full outline-none' type="submit" value="Save address"/>
                </div>

            </form>
        </div>
        </>
    )
    



        
}

export default AddressBox