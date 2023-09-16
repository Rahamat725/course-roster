// import PropTypes from 'prop-types';


import { useState } from 'react';
import './App.css'
import Cards from './components/cards/Cards';
import Carts from './components/Carts/Carts';
import { ToastContainer, toast, Slide, Zoom, Bounce,Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
 const [remainingCreditHr, setremainingCreditHrr] = useState(20);
 const [creditHr, setCreditHr] = useState(0);
 const [carts, setCarts] = useState([]);
 const [price, setPrice] = useState(0);



 const handleCreditHr = (card) =>{
  console.log(card);
  const isExist = carts.find(item => item.id==card.id);
  if(isExist){
   return toast.info('You have already aded this item');
 
  }else{
    const newCarts = [...carts,card];
    setCarts(newCarts);
  }
  
  const totalPrice = price + card.price;
  // This part is for the Total Credit
  const newCreditHr = creditHr + card.credit_hr;
  if(newCreditHr>20){
   return toast.warn("You Can't add more than 20 hour credit");
  }else{
      setCreditHr(newCreditHr);
      setPrice(totalPrice);
      toast.success('Item added sunccessfully');
  }
  // this part is for Remaining Credit part
  const newremainingCreditHr = remainingCreditHr - card.credit_hr;
  if(newremainingCreditHr<0){
    return toast.info("You have no credit hour")
  }else{
    setremainingCreditHrr(newremainingCreditHr);
    
  }

 
  
 }

  return (
    <>
    <ToastContainer
    position='top-right'
    autoClose={3000}
    pauseOnHover={false}
    transition={Slide}
    hideProgressBar={false}
    closeOnClick={true}
    limit={5}
    theme='colored'
    />
     <h2 className='text-center text-3xl font-bold mt-4'>Course Registration</h2>

    <div className="max-w-7xl mx-auto flex  lg:flex lg:flex-row flex-col-reverse gap-4  justify-between mt-4">
    <Cards handleCreditHr={handleCreditHr}></Cards>

    <Carts remainingCreditHr={remainingCreditHr} 
      carts={carts}
      price={price}
    creditHr={creditHr} ></Carts>
    </div>
      
    </>
  )
}

export default App
