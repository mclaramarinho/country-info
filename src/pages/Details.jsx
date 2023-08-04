import React, { useEffect } from "react";
import { countryToDetail as x} from "./SearchPage";
import DetailedInfo from "../components/DetailedInfo";
import { useNavigate } from "react-router";
import handleTheme from "../handleTheme";

function Details(){

    useEffect(() => {
        handleTheme();
    }, [])
    
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


    const navigate = useNavigate();
    function backClick () {
        return navigate('/');
    }

    
    return(
        <div className="body-container light-body">
            
            <div className="main-container container-fluid">
                <div className="row row-gap-5">
                    <div className="row">
                        <div className="col-lg-4 padding">
                            <button onClick={backClick} className="btn back-btn py-1 px-4">
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