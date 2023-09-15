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
        <div className="w-3/4 grid grid-cols-3 gap-4">
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