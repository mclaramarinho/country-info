import React from "react";
function TextInput (props){
    const inputBg = props.inputBg;
    const inputText = props.inputText;
    return(
            <div className="col-md-5 col-lg-5 col-xl-4">
                <div className="input-group flex-nowrap">
                    <span style={{backgroundColor: inputBg, color:inputText}} className="input-group-text"><i className="fa-solid fa-magnifying-glass"></i></span>
                    <input style={{backgroundColor: inputBg, color:inputText}} id="textInput" onChange={props.handler} value={props.value} type="text" className={"form-control "+props.placeholder} placeholder="Search for a country..." />
                </div>
            </div>
        
    )
}

export default TextInput;
