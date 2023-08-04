import React from "react";
import handleTheme from "../handleTheme";

function Navbar (){
    let controlTheme = false;

    function toggleControl(){
        if(controlTheme === true){
            controlTheme = false;
        }else{
            controlTheme = true;
        }
        setNavBarTheme();
    }   
    function setNavBarTheme(){
        const navEl = document.getElementById("navbar").classList;

        if(controlTheme === true){
            navEl.add("dark-navbar")
            navEl.remove("light-navbar")
        }else{
            navEl.remove("dark-navbar")
            navEl.add("light-navbar")
        }

        handleTheme()
        
    }

    return(
        <nav className="navbar" id="navbar">
            <div className="container-fluid px-5 py-2">
                <span className="navbar-brand">Where in the world?</span>
                <button className="btn setThemeBTN"  onClick={() => toggleControl()}>Dark Theme</button>
            </div>
        </nav>
    )
}

export default Navbar;