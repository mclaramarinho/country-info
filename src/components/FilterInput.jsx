import React from "react";

function FilterInput (props){
    const inputBg = props.inputBg;
    const inputText = props.inputText;
    return(
        <div className="col-md-4 col-lg-3 col-xl-2 ms-auto">
            <select name="filter" id="filter-field" className="form-control form-select" onChange={props.filterHandler} style={{backgroundColor: inputBg, color: inputText}}>
                <option value="allCountries" selected="selected">Filter by region</option>
                <option value="africas">Africas</option>
                <option value="americas">Americas</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </div>
    )
}

export default FilterInput;