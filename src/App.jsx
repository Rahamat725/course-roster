// import PropTypes from 'prop-types';


import { useState } from 'react';
import './App.css'
import Cards from './components/cards/Cards';
import Cart from './components/cart/Cart';

function App() {
 const [remainingCreditHr, setremainingCreditHrr] = useState(20);
 const [creditHr, setCreditHr] = useState(0);


 const handleCreditHr = (card) =>{
  console.log(card);

  const newremainingCreditHr = remainingCreditHr - card.credit_hr;
  if(newremainingCreditHr<0){
    return alert("you have no credit")
  }else{
    setremainingCreditHrr(newremainingCreditHr);

  }
 
  const newCreditHr = creditHr + card.credit_hr;
  if(newCreditHr>20){
   return alert("You can't take more than 20 hr credit");
  }else{
     return setCreditHr(newCreditHr);
  }
  
 }

  return (
    <>
     <h2 className='text-center text-3xl font-bold mt-4'>Course Registration</h2>
    <div className="max-w-7xl mx-auto md:flex gap-4  justify-between mt-4">
    <Cards handleCreditHr={handleCreditHr}></Cards>
    <Cart remainingCreditHr={remainingCreditHr} creditHr={creditHr}></Cart>
    </div>
      
    </>
  )
}

export default App
