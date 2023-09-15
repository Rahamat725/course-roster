
import PropTypes from 'prop-types';
const Cart = ({remainingCreditHr, creditHr}) => {
    return (
        <div className="w-1/4  ">
         <div className=" p-6 shadow-lg">
         <h2 className="text-lg font-bold text-[#2F80ED]">Credit Hour Remaining {remainingCreditHr} hr</h2>
            <hr className="border-2 mt-2"/>
            <div className="">
                <h2 className="text-xl font-bold mt-4 mb-5">Course Name</h2>
                <ol className="list-decimal mb-5">
                    
                    <li>Introduction to OOP Python</li>
                    <li>Database (MySQL)</li>
                    <li>Introduction to C Programming</li>
                </ol>
            </div>
            <hr className="border-2"/>
            <h2 className="text-base font-medium mt-4 mb-4">Total Credit Hour : {creditHr}</h2>
            <hr className="border-2"/>
            <h2 className="text-base font-semibold mt-4">Total Price : 48000 USD</h2>
         </div>
        </div>
    );
};
 
Cart.propTypes = {
    remainingCreditHr: PropTypes.number,
    creditHr: PropTypes.number
}
export default Cart;