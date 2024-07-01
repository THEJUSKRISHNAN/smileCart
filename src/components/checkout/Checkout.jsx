import React from 'react'
import Nav from '../Nav';
import { Formik, Field } from 'formik';
import { useRef, useState } from "react";
import { useCreateOrder } from '../../hooks/reactQuery/useCheckoutApi';
import useCartItemsStore from '../../stores/useCartItemsStore';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Helmet } from 'react-helmet'

const Checkout = () => {
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
  const history = useHistory();
  

  let clearCartData = useCartItemsStore(store=>store.clearCart);
  const { mutate:createOrder} = useCreateOrder();

  const redirectToHome=()=>{
    clearCartData();
    history.push('/Ordersuccess');
   
  }

 


  const handleSubmit = values => {
    setIsSubmitDisabled(true);

    createOrder(
      { payload: values },
      {
        onSuccess: () => {
          redirectToHome();
          
        },
        onError: () => setIsSubmitDisabled(false),
      }
    );
    
  };




  const validate=values=>{
    const errors={};
    if(String(values.PhoneNumber).length<10 || String(values.PhoneNumber).length>10)
      {
        errors.PhoneNumber="PhoneNumber must be in 10 digit"
      }
      return errors;
  }
  

  return (
    <>
      <Helmet>
        <title>Checkout</title>
      </Helmet>
      <Nav home="CHECKOUT" isBack="true" />

      <div className='grid justify-center pt-[10rem]'>


        <Formik initialValues={{ Name: '', HouseName: '', PostOffice: '', LandMark: '', City: '', District: '', State: '', Email: '', PhoneNumber: '' }}
          validate={validate}
          onSubmit={handleSubmit}
        >

          {(formik) => (

            <form onSubmit={formik.handleSubmit}>
              <section className='max-sm:w-[25rem]'>

                <div>
                  <h1 className='font-bold text-[4rem] underline'>Shipping Address</h1>
                  <div>
                    <label htmlFor="Name" className="font-semibold text-[2rem]">Name:</label>
                    <Field required type="text" name="Name" className='border-black border-2 rounded-md w-full ml-2 pl-2' />
                    
                  </div>
                  <div className='mt-2'>
                    <label htmlFor="HouseName" className="font-semibold text-[2rem]">House name:</label>
                    <Field required type="text" name="HouseName" id="HouseName" className='border-black border-2 rounded-md w-full ml-2 pl-2' />
                  </div>
                  <div className='mt-2'>
                    <label htmlFor="PostOffice" className="font-semibold text-[2rem]">Post Office:</label>
                    <Field required type="text" name="PostOffice" id="PostOffice" className='border-black border-2 rounded-md w-full ml-2 pl-2' />
                  </div>
                  <div className='mt-2'>
                    <label htmlFor="LandMark" className="font-semibold text-[2rem]">Land Mark:</label>
                    <Field required type="text" name="LandMark" id="LandMark" className='border-black border-2 rounded-md w-full ml-2 pl-2' />
                  </div>
                  <div className='mt-2'>
                    <label htmlFor="City" className="font-semibold text-[2rem]">City:</label>
                    <Field required type="text" name="City" id="City" className='border-black border-2 rounded-md w-full ml-2 pl-2' />
                  </div>
                  <div className='mt-2'>
                    <label htmlFor="District" className="font-semibold text-[2rem]">District:</label>
                    <Field required type="text" name="District" id="District" className='border-black border-2 rounded-md w-full ml-2 pl-2' />
                  </div>
                  <div className='mt-2'>
                    <label htmlFor="State" className="font-semibold text-[2rem]">State:</label>
                    <Field required type="text" name="State" id="State" className='border-black border-2 rounded-md w-full ml-2 pl-2' />
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-semibold text-[2rem] underline">Contact</h2>
                <div className='mt-2'>
                  <label htmlFor="Email" className="font-semibold text-[2rem]">Email:</label>
                  <Field required type="email" name="Email" id="Email" className='border-black border-2 rounded-md w-full ml-2 pl-2' />
                </div>
                <div className='mt-2'>
                  <label htmlFor="PhoneNumber" className="font-semibold text-[2rem]">Phone number:</label>
                  <Field required type="number" name="PhoneNumber" id="PhoneNumber" className='border-black border-2 rounded-md w-full ml-2 pl-2'/>
                  {formik.errors.PhoneNumber  ? <p className='text-red-800'>{formik.errors.PhoneNumber}</p> : null}
                </div>

              </section>
              <div className='flex justify-center'>
                <button type="submit" className='px-4 bg-blue-600 text-white font-semibold rounded-lg py-2 my-2' disabled={isSubmitDisabled}>Confirm order</button>
              </div>

            </form>

          )}

        </Formik>

      </div>
    </>
  )
}

export default Checkout
