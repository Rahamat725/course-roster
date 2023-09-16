
import PropTypes from 'prop-types';
import Cart from '../cart/Cart';
const Carts = ({remainingCreditHr, creditHr, carts,price}) => {
    return (
        <div className="w-1/4  ">
         <div className=" p-6 shadow-lg">
         <h2 className="text-lg font-bold text-[#2F80ED]">Credit Hour Remaining {remainingCreditHr} hr</h2>
            <hr className="border-2 mt-2"/>
            <div className="">
                <h2 className="text-xl font-bold mt-4 mb-5">Course Name</h2>
                <ol className="list-decimal mb-5">
                    
                    {/* <li>Introduction to OOP Python</li>
                    <li>Database (MySQL)</li>
                    <li>Introduction to C Programming</li> */}
                   {
                     carts.map(cart =><Cart key={cart.id} cart={cart}></Cart>)
                   }
                </ol>
            </div>
            <hr className="border-2"/>
            <h2 className="text-base font-medium mt-4 mb-4">Total Credit Hour : {creditHr}</h2>
            <hr className="border-2"/>
            <h2 className="text-base font-semibold mt-4">Total Price : {price} USD</h2>
         </div>
        </div>
    );
};
 
Carts.propTypes = {
    remainingCreditHr: PropTypes.number,
    creditHr: PropTypes.number,
    cart:PropTypes.object,
    carts:PropTypes.array,
    price: PropTypes.number
}
export default Carts;