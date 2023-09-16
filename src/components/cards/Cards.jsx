import { useEffect, useState } from "react";
import Card from "../card/Card";
import PropTypes from 'prop-types';

const Cards = ({handleCreditHr}) => {
    const [cards, setCards] = useState([]);
    useEffect(()=>{
        fetch('Course.json')
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[])


    return (
        <div className="lg:w-3/4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
             {/* <h2>Cards items</h2> */}
              {
                cards.map(card =><Card 
                    handleCreditHr={handleCreditHr}
                    key={card.id} card={card}></Card>)
              } 
            
        </div>
    );
};

Cards.propTypes = {
    handleCreditHr: PropTypes.func
}
export default Cards;