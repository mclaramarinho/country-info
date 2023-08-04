import React, { useEffect } from "react";
import SearchBar from '../components/SearchBar'
import Card from '../components/Card'
import { useState } from "react";
import { useNavigate } from "react-router";
import handleTheme from "../handleTheme";


let countryToDetail; 

function SearchPage(){
    const [textValue, setTextValue] = useState("");
    const [result, setResult] = useState([]);
    let control = "allCountries";

    const navigate = useNavigate(); 

    useEffect(() => {
        cardArray(textValue);
        handleTheme();
    }, [])

    function handleInputChange(e){
        let currentValue = e.target.value;
        setTextValue(currentValue);
        cardArray(currentValue);
    }

    let indexes = [];
    function cardArray(value){
        createRequest();
        request.onload = () =>{
            control = filterHandler();
            createCountryLists("all")

            //Creates an array of results based on the filters applied
            filterArray = ((control==="allCountries") ? allCountries
                : (control==="africas") ? africas
                : (control==="americas") ? americas
                : (control==="asia") ? asia
                : (control==="europe") ? europe
                : oceania)

            //Sets the results
            if(value.length === 0){
                indexes = []
                setResult(filterArray)
            }
            else if(value.length > 0){
                createCountryLists("commonFilter");
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

    const request = new XMLHttpRequest();
    function createRequest(){
        request.open("GET", 'https://restcountries.com/v3.1/all');
        request.send();
    }

    let allCountries = [], africas = [], americas = [], asia = [], europe = [], oceania = [], commonNames = [], filterArray = [];
    function createCountryLists(arg){
        allCountries = JSON.parse(request.response)
        if(arg.includes("all")){
            return(
                africas = Array.from(allCountries.filter(country => country.region==="Africa")),
                americas = Array.from(allCountries.filter(country => country.region==="Americas")),
                asia = Array.from(allCountries.filter(country => country.region==="Asia")),
                europe = Array.from(allCountries.filter(country => country.region==="Europe")),
                oceania = Array.from(allCountries.filter(country => country.region==="Oceania"))
            )
        }else if(arg.includes("commonFilter")){
            commonNames = Array.from(filterArray.map(country => {return country.name.common}))
            return commonNames = commonNames.map(item => item.toLowerCase());
        }else if(arg.includes("commonAll")){
            return commonNames = Array.from(allCountries.map(country => {return country.name.common}))
        }
    }

    //FILTERS THE RESULT BASED ON THE TEXT INPUT
    function filterText (arr, query){
        return arr.filter((item) => {
            if(item.includes(query)){
                return item;
            }
        })
    }
    
    //SETS THE FILTER CONTROL VARIABLE
    function filterHandler(){
        const el = document.getElementById("filter-field")
        const x = el.options.selectedIndex;
        let opt = document.querySelectorAll("option")[x].value;
        if(opt===undefined){
            opt="allCountries"
        }
        return opt;
    }

    //HANDLES CLICKS ON EACH CARD
    function handleClick(name){
        createRequest();
        request.onload = () =>{
            createCountryLists("commonAll")
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
    // function handleTheme(){
    //     const navEl = document.getElementById("navbar").classList;
    //     const body = document.getElementsByClassName("body-container")[0].classList;
    //     const textInput = document.getElementById("textInput").classList;
    //     const atSign = document.getElementById("textInputBefore").classList;
    //     const filterField = document.getElementById("filter-field").classList;

    //     if(navEl.contains("dark-navbar")){
    //         body.add("dark-body")
    //         body.remove("light-body")
    //         textInput.add("dark-input")
    //         atSign.add("dark-input")
    //         textInput.remove("light-input")
    //         atSign.remove("light-input")
    //         filterField.add("dark-input")
    //         filterField.remove("light-input")
    //     }else{
    //         body.remove("dark-body")
    //         body.add("light-body")
    //         textInput.remove("dark-input")
    //         atSign.remove("dark-input")
    //         textInput.add("light-input")
    //         atSign.add("light-input")
    //         filterField.remove("dark-input")
    //         filterField.add("light-input")
    //     }
    // }
    
    
    return (
        <div className="body-container light-body">
            <div id="main-container" className="container-fluid px-5 py-2">
                <SearchBar handler={handleInputChange} value={textValue} filterHandler={() => cardArray(textValue)} />
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