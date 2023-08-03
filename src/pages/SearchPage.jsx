import React, { useEffect } from "react";
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import Card from '../components/Card'

import { useState } from "react";
import { useNavigate } from "react-router";

let countryToDetail;

function SearchPage(){
    const [textValue, setTextValue] = useState("");
    const [result, setResult] = useState([]);
    let control = "allCountries";
    const [theme, setTheme] = useState("true"); //true = dark
    const [bgColor, setBgColor] = useState();
    const [navBg, setNavBg] = useState();
    const [navText, setNavText] = useState();
    const navigate = useNavigate(); 
    const [placeholder, setPlaceholder] = useState();

    useEffect(() => {
        handleTheme();
        cardArray(textValue);
    }, [])

    function handleInputChange(e){
        let currentValue = e.target.value;
        setTextValue(currentValue);
        cardArray(currentValue);
    }
    let indexes = [];

    function cardArray(value){
        const request = new XMLHttpRequest();
        request.open("GET", 'https://restcountries.com/v3.1/all');
        request.send();
        request.onload = () =>{
            control = filterHandler();
            const allCountries = JSON.parse(request.response)
            const africas = Array.from(allCountries.filter(country => country.region==="Africa"));
            const americas = Array.from(allCountries.filter(country => country.region==="Americas"));
            const asia = Array.from(allCountries.filter(country => country.region==="Asia"));
            const europe = Array.from(allCountries.filter(country => country.region==="Europe"));
            const oceania = Array.from(allCountries.filter(country => country.region==="Oceania"));
                        
            const filterArray = ((control==="allCountries") ? allCountries
                : (control==="africas") ? africas
                : (control==="americas") ? americas
                : (control==="asia") ? asia
                : (control==="europe") ? europe
                : oceania)

            if(value.length === 0){
                indexes = []
                setResult(filterArray)
            }
            else if(value.length > 0){
                
                let commonNames = Array.from(filterArray.map(country => {return country.name.common}))
                commonNames = commonNames.map(item => item.toLowerCase());
                value = value.toLowerCase();
                

                const filteredNames = filterText(commonNames, value)
                for(let i = 0; i < commonNames.length; i++){
                    for(let j = 0; j < filteredNames.length; j++){
                        if(commonNames[i].includes(filteredNames[j])){
                            indexes.push(i);
                        }
                    }
                }

                setResult([])
                for(let i = 0; i < indexes.length; i++){
                    let pos = indexes[i];
                    setResult(prev => [...prev, filterArray[pos]])
                }
            }
        }
    }
    
    function filterText (arr, query){
        return arr.filter((item) => {
            if(item.includes(query)){
                return item;
            }
        })
    }
    
    function filterHandler(){
        const el = document.getElementById("filter-field")
        const x = el.options.selectedIndex;
        let opt = document.querySelectorAll("option")[x].value;
        if(opt===undefined){
            opt="allCountries"
        }
        return opt;
    }

    function handleClick(name){
        const request = new XMLHttpRequest();
        request.open("GET", 'https://restcountries.com/v3.1/all');
        request.send();
        request.onload = () =>{
            let allCountries = JSON.parse(request.response);
            let commonNames = Array.from(allCountries.map(country => {return country.name.common}));
            let ind;
            for(let i = 0; i < commonNames.length; i++){
                if(commonNames[i].includes(name)){
                    ind = i;
                    break;
                }
            }
            return (countryToDetail=(allCountries[ind]), navigate('/countryDetail'))
        }
        
    }
    
    function handleTheme(){
        if(theme.includes("false")){
            return (setTheme("true"),
            setBgColor("hsl(207, 26%, 17%)"),
            setNavBg("hsl(209, 23%, 22%)"),
            setNavText("white"),
            setPlaceholder("dark-ph"))
        }else{
            return (setTheme("false"),
            setBgColor("hsl(0, 0%, 98%)"),
            setNavBg("white"),
            setNavText("black"),
            setPlaceholder(""))
        }
    }
    
    return (
        <div style={{backgroundColor:bgColor}}>
            <Navbar handler={handleTheme} navBg={navBg} textColor={navText}/>
            <div id="main-container" className="container-fluid px-5 py-2">
                <SearchBar handler={handleInputChange} value={textValue} filterHandler={() => cardArray(textValue)} inputBg={navBg} inputText={navText} placeholder={placeholder}/>
                <div id="results-container" className="row" style={{marginTop:5+'vh'}}>
                    {
                        result.map(country => {
                            
                            return(
                                <Card handleClick={() => handleClick(country.name.common)}
                                    img={country.flags.svg}
                                    countryName={country.name.common}
                                    region={country.region}
                                    population={country.population}
                                    capital={country.capital}

                                    cardBg={navBg}
                                    cardText={navText}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>

            
                
        
    )
}

export default SearchPage
export {countryToDetail}