import { useEffect, useState } from "react";
import Card from "../card/Card";


const Cards = () => {
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
                cards.map(card =><Card key={card.id} card={card}></Card>)
              } 
            
        </div>
    );
};

export default Cards;