import React from "react";
import TextInput from "./TextInput";
import FilterInput from "./FilterInput";

function SearchBar (props){
    return(
        <div className="row">
            <TextInput handler={props.handler} value={props.value} inputBg={props.inputBg} inputText={props.inputText} placeholder={props.placeholder}/>
            <FilterInput filterHandler={props.filterHandler} inputBg={props.inputBg} inputText={props.inputText}/>
        </div>
    )
}
export default SearchBar;