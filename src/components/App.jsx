import SearchPage from "../pages/SearchPage";
import Details from "../pages/Details";
import Navbar from "./Navbar";
import { BrowserRouter as Router,  Route, Routes} from "react-router-dom";

function App (){

    return <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<SearchPage />} exact />
                
            <Route path="/countryDetail/" element={<Details />} />
                
        </Routes>
    </Router>
}
export default App;