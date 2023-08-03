import React from "react";

function DetailedInfo(props){
    return(
        <div className="row details-container column-gap-5">
            <div className="col-md-5 col-lg-5 d-inline-flex align-middle">
                <img className="detailsImg" src={props.source} alt="" />
            </div>
            <div className="col-md-6 col-lg-5 py-3">
                <div className="row">
                    <h1>{props.commonName}</h1>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <p><span>Native Name: </span>{props.nativeName}</p>
                        <p><span>Population: </span>{props.population}</p>
                        <p><span>Region: </span>{props.region}</p>
                        <p><span>Sub Region: </span>{props.subregion}</p>
                        <p><span>Capital: </span>{props.capital}</p>
                    </div>
                
                <div className="col-md-6">
                    <p><span>Top Level Domain: </span>{props.topLevel}</p>
                    <p><span>Currencies: </span>{props.currencies}</p>
                    <p><span>Languages: </span>{props.langs}</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default DetailedInfo;