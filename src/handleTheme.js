function handleTheme(){

    const navEl = document.getElementById("navbar").classList;
    const body = document.getElementsByClassName("body-container")[0].classList;
    const html = document.getElementsByTagName("html")[0].classList;
    const navBrand = document.getElementsByClassName("navbar-brand")[0].classList;
    const navBtn = document.getElementsByClassName("setThemeBTN")[0].classList;

    const pageUrl = window.location.pathname;

    if(navEl.contains("dark-navbar")){ //DARK THEME
        setGeneral("dark");

        //SEARCH PAGE
        if(!pageUrl.match('/countryDetail')){
            setSearchPage("dark")
        }
        //DETAILS PAGE
        else {
            setDetailsPage("dark")
        }
    }else{                            //LIGHT THEME
        setGeneral("light");
        //SEARCH PAGE
        if(!pageUrl.match('/countryDetail')){
            setSearchPage("light")
        }
        //DETAILS PAGE
        else {
            setDetailsPage("light")
        }
    }
    
    function setGeneral (theme){
        const toAdd = (theme === "dark") ? "dark" : "light";
        const toDel = (theme === "dark") ? "light" : "dark";
        const textSetAdd = (theme === "dark") ? "light" : "dark";
        const textSetDel = (theme === "dark") ? "dark" : "light";

        body.add(toAdd+"-body")
        body.remove(toDel+"-body")
        html.add(toAdd+"-body")
        html.remove(toDel+"-body")

        navBrand.add(textSetAdd+"-text")
        navBrand.remove(textSetDel+"-text")
        navBtn.add(textSetAdd+"-text")
        navBtn.remove(textSetDel+"-text")
    }
    function setSearchPage(theme){
        const textInput = document.getElementById("textInput").classList;
        const atSign = document.getElementById("textInputBefore").classList;
        const filterField = document.getElementById("filter-field").classList;

        const toAdd = (theme === "dark") ? "dark" : "light";
        const toDel = (theme === "dark") ? "light" : "dark";

        textInput.add(toAdd+"-input")
        atSign.add(toAdd+"-input")
        textInput.remove(toDel+"-input")
        atSign.remove(toDel+"-input")
        filterField.add(toAdd+"-input")
        filterField.remove(toDel+"-input")
    }
    function setDetailsPage(theme){
        const toDel = (theme === "dark") ? "dark" : "light";
        const toAdd = (theme === "dark") ? "light" : "dark";

        const backBtn = document.getElementsByClassName("back-btn")[0].classList;
        body.remove(toDel+"-text")
        body.add(toAdd+"-text")
        backBtn.remove(toDel+"-text")
        backBtn.add(toAdd+"-text")
    }
}

export default handleTheme;