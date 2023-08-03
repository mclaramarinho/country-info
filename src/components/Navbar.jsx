import React from "react";

function Navbar (props){
    const bgColor = props.navBg;
    const textColor = props.textColor;
    return(
        <nav className="navbar sticky-top" style={{backgroundColor: bgColor}}>
            <div className="container-fluid px-5 py-2">
                <span style={{color: textColor}} className="navbar-brand">Where in the world?</span>
                <button style={{color: textColor}} onClick={props.handler} className="btn setTheme"><i class="fa-solid fa-moon"></i> Dark Mode</button>
            </div>
        </nav>
    )
}

export default Navbar;
