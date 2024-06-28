import React from 'react'
import Nav from '../Nav';
import { useFormik } from 'formik';
const Checkout = () => {
  const validate=values=>{
    const errors={};
    console.log(String(values.PhoneNumber).length);
    if(String(values.PhoneNumber).length<10 || String(values.PhoneNumber).length>10)
      {
        errors.PhoneNumber="PhoneNumber must be in 10 digit"
      }
      return errors;
  }


  const formik = useFormik({
    initialValues:{
      Name: '',HouseName: '',PostOffice: '',LandMark:'',City: '',District: '',State: '',Email: '',PhoneNumber: ''
    },
    validate,
    onSubmit:values=>{
          console.log(values);
         
    }
  })



  return (
    <>

      <Nav home="CHECKOUT" isBack="true" />

      <div className='grid justify-center'>
        
          <form onSubmit={formik.handleSubmit}>
            <section>

              <div>
                <h1 className='font-bold text-[4rem] underline'>Shipping Address</h1>
                <div>
                  <label htmlFor="Name" className="font-semibold text-[2rem]">Name:</label> 
                  <input required type="text" name="Name" id="Name" className='border-black border-2 rounded-md w-full ml-2 pl-2' value={formik.values.Name} onChange={formik.handleChange}/>
                </div>
                <div className='mt-2'>
                  <label htmlFor="HouseName" className="font-semibold text-[2rem]">House name:</label>
                  <input required type="text" name="HouseName" id="HouseName" className='border-black border-2 rounded-md w-full ml-2 pl-2' value={formik.values.HouseName} onChange={formik.handleChange}/>
                </div>
                <div className='mt-2'>
                  <label htmlFor="PostOffice" className="font-semibold text-[2rem]">Post Office:</label>
                  <input required type="text" name="PostOffice" id="PostOffice" className='border-black border-2 rounded-md w-full ml-2 pl-2' value={formik.values.PostOffice} onChange={formik.handleChange}/>
                </div>
                <div className='mt-2'>
                  <label htmlFor="LandMark" className="font-semibold text-[2rem]">Land Mark:</label>
                  <input required type="text" name="LandMark" id="LandMark" className='border-black border-2 rounded-md w-full ml-2 pl-2' value={formik.values.LandMark} onChange={formik.handleChange}/>
                </div>
                <div className='mt-2'>
                  <label htmlFor="City" className="font-semibold text-[2rem]">City:</label>
                  <input required type="text" name="City" id="City" className='border-black border-2 rounded-md w-full ml-2 pl-2' value={formik.values.City} onChange={formik.handleChange}/>
                </div>
                <div className='mt-2'>
                  <label htmlFor="District" className="font-semibold text-[2rem]">District:</label>
                  <input required type="text" name="District" id="District" className='border-black border-2 rounded-md w-full ml-2 pl-2' value={formik.values.District} onChange={formik.handleChange}/>
                </div>
                <div className='mt-2'>
                  <label htmlFor="State" className="font-semibold text-[2rem]">State:</label>
                  <input required type="text" name="State" id="State" className='border-black border-2 rounded-md w-full ml-2 pl-2' value={formik.values.State} onChange={formik.handleChange}/>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-semibold text-[2rem] underline">Contact</h2>
              <div className='mt-2'>
                <label htmlFor="Email" className="font-semibold text-[2rem]">Email:</label>
                <input required type="email" name="Email" id="Email" className='border-black border-2 rounded-md w-full ml-2 pl-2' value={formik.values.Email} onChange={formik.handleChange}/>
              </div>
              <div className='mt-2'>
                <label htmlFor="PhoneNumber" className="font-semibold text-[2rem]">Phone number:</label>
                <input required type="number" name="PhoneNumber" id="PhoneNumber" className='border-black border-2 rounded-md w-full ml-2 pl-2' value={formik.values.PhoneNumber} onChange={formik.handleChange}/>
                {formik.errors.PhoneNumber ?<p className='text-red-800'>{formik.errors.PhoneNumber}</p>:null}
              </div>

            </section>
            <div className='flex justify-center'>
              <button type="submit" className='px-4 bg-blue-600 text-white font-semibold rounded-lg py-2 my-2'>Confirm order</button>
            </div>


          </form>
       



      </div>
    </>
  )
}

export default Checkout
