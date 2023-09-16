// import PropTypes from 'prop-types';


import { useState } from 'react';
import './App.css'
import Cards from './components/cards/Cards';
import Carts from './components/Carts/Carts';

function App() {
 const [remainingCreditHr, setremainingCreditHrr] = useState(20);
 const [creditHr, setCreditHr] = useState(0);
 const [carts, setCarts] = useState([])



 const handleCreditHr = (card) =>{
  console.log(card);
  const isExist = carts.find(item => item.id==card.id);
  if(isExist){
   return alert('Already aded');
  }else{
    const newCarts = [...carts,card];
    setCarts(newCarts);
  }
  
  
  // this part is for Remaining Credit part
  const newremainingCreditHr = remainingCreditHr - card.credit_hr;
  if(newremainingCreditHr<0){
    return alert("you have no credit")
  }else{
    setremainingCreditHrr(newremainingCreditHr);
    
  }
 
  // This part is for the Total Credit
  const newCreditHr = creditHr + card.credit_hr;
  if(newCreditHr>20){
   return alert("You can't take more than 20 hr credit");
  }else{
      setCreditHr(newCreditHr);
  }
 
  
 }

  return (
    <>
     <h2 className='text-center text-3xl font-bold mt-4'>Course Registration</h2>

    <div className="max-w-7xl mx-auto flex  lg:flex lg:flex-row flex-col-reverse gap-4  justify-between mt-4">
    <Cards handleCreditHr={handleCreditHr}></Cards>

    <Carts remainingCreditHr={remainingCreditHr} 
      carts={carts}
    creditHr={creditHr} ></Carts>
    </div>
      
    </>
  )
}

export default App
