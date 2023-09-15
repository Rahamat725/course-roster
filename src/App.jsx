// import PropTypes from 'prop-types';


import './App.css'
import Cards from './components/cards/Cards';
import Cart from './components/cart/Cart';

function App() {
 

  return (
    <>
     <h2 className='text-center text-3xl font-bold mt-4'>Course Registration</h2>
    <div className="max-w-7xl mx-auto md:flex  justify-between mt-4">
    <Cards></Cards>
    <Cart></Cart>
    </div>
      
    </>
  )
}

export default App
