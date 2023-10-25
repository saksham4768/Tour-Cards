import { useState } from "react";

function Card({id, name, info, image, price, RemoveTour}){
    const[readmore, setReadmore] = useState(false);
    const description = readmore ? info: `${info.substring(0, 190)}....`;
    function ReadMoreHandler(){
        setReadmore(!readmore);
    }
    return(
        <div className="Card">
            <img className="image" src={image} alt=""></img>
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹{price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="description">
                    {description}
                    <span className="read-more" onClick={ReadMoreHandler}>
                        {readmore ? `Show Less`: `Read More`}
                    </span>
                </div>
            </div>
            <button className="btn-red" onClick={() => RemoveTour(id)}>Not Interested</button>
        </div>
    )
}

export default Card;