import React from "react";
function TextInput (props){
    return(
            <div className="col-md-5 col-lg-5 col-xl-4">
                <div className="input-group flex-nowrap">
                    <span id="textInputBefore" className="input-group-text"><i className="fa-solid fa-magnifying-glass"></i></span>
                    <input id="textInput" onChange={props.handler} value={props.value} type="text" className="form-control" placeholder="Search for a country..." />
                </div>
            </div>
        
    )
}

export default TextInput;
