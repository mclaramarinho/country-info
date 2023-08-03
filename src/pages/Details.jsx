import React, { useEffect } from "react";
import { useState } from "react";
import { countryToDetail as x} from "./SearchPage";
import Navbar from "../components/Navbar";
import DetailedInfo from "../components/DetailedInfo";
import { useNavigate } from "react-router";


function Details(){
   
    const commonName = x.name.common;
    const flag = x.flags.svg;
    
    let nativeName = Object.values(x.name.nativeName).map(value => value.official);
    nativeName = nativeName.map((x, i) => i !== (nativeName.length-1) ? x+", " : x)

    const pop = x.population;
    const reg = x.region;
    const subreg = x.subregion;
    const capital = x.capital;
    const topLevel = x.tld[0]
    const currencies = Object.values(x.currencies)[0].name;
    
    let langs = Object.values(x.languages);
    langs = langs.map((x,i) => i!==(langs.length-1) ? x+", " : x)
    
    const [theme, setTheme] = useState("true"); //true = dark
    const [bgColor, setBgColor] = useState();
    const [navBg, setNavBg] = useState();
    const [navText, setNavText] = useState();

    const navigate = useNavigate();
    function backClick () {
        return navigate('/')
    }

    useEffect(()=>{
        handleTheme();
    }, [])
    
    function handleTheme(){
        if(theme.includes("false")){
            return (setTheme("true"),
            setBgColor("hsl(207, 26%, 17%)"),
            setNavBg("hsl(209, 23%, 22%)"),
            setNavText("white"))
        }else{
            return (setTheme("false"),
            setBgColor("hsl(0, 0%, 98%)"),
            setNavBg("white"),
            setNavText("black"))
        }
    }
    document.getElementsByTagName("html")[0].style.backgroundColor=bgColor;

    return(
        <div >
            <Navbar handler={handleTheme} navBg={navBg} textColor={navText}/>
            <div className="main-container container-fluid" style={{backgroundColor: bgColor}}>
                <div className="row row-gap-5" style={{color: navText}}>
                    <div className="row">
                        <div className="col-lg-4 padding">
                            <button style={{backgroundColor: navBg, color: navText}} onClick={backClick} className="btn back-btn py-1 px-4">
                                <i class="fa-solid fa-arrow-left me-1"></i>Back
                            </button>
                        </div>
                    </div>
                    <DetailedInfo
                        source={flag}
                        commonName={commonName} 
                        nativeName={nativeName}
                        population={pop}
                        region={reg}
                        subregion={subreg}
                        capital={capital}
                        topLevel={topLevel}
                        currencies={currencies}
                        langs={langs} />
                </div>
            </div>
        </div>
    )
}
export default Details;