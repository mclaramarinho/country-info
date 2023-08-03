import React from "react";

function Card (props){
    const cardBg = props.cardBg;
    const cardText = props.cardText;
    return(
        <div  className="card col-xl-2 col-lg-3 col-md-4" style={{width:20 + 'rem', backgroundColor: cardBg, color:cardText}} onClick={props.handleClick}>
            <img src={props.img} alt="" className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{props.countryName}</h5>
                <p><span>Population: </span>{props.population}</p>
                <p><span>Region: </span>{props.region}</p>
                <p><span>Capital: </span>{props.capital}</p>
            </div>
        </div>
    )
}

export default Card;