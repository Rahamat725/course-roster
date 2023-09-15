import { BsBook } from 'react-icons/Bs';
import { FiDollarSign } from 'react-icons/Fi';
import PropTypes from 'prop-types';
const Card = ({card}) => {
    console.log(card)
    const {image,title,price,credit_hr,description} = card;
    return (
        <div className='shadow-lg  p-4'>
           <div className='text-center'> 
           <img className='' src={image} alt="" />
           </div>
           <h2 className='text-base font-semibold mt-4 mb-3'>{title}</h2>
           <p className='text-sm text-[#AEADAD] font-normal leading-6'>{description}</p>
           <div className='flex justify-around items-center mt-4 mb-5'>
            <p className='text-xl'><FiDollarSign>{FiDollarSign}</FiDollarSign></p>
            <p className='text-base font-medium text-[#737272]'> Price: {price}</p>
             <p><BsBook>{BsBook}</BsBook></p>
            <p className='text-[#737272] text-base font-medium'>Credit: {credit_hr}hr</p>
           </div>
         <div className='text-center text-lg font-semibold bg-[#2F80ED] rounded-lg'>
         <button className='text-white py-2'>Select</button>
         </div>
        </div>
    )
};

Card.propTypes = {
    Card: PropTypes.func,
    card: PropTypes.object
}
export default Card;