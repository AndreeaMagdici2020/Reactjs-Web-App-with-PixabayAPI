import React from "react";
import HeaderApp from "./../headerApp.js";
import SearchBar from "./searchbar.js";

class MainScreen extends React.Component {
    
    render() {
        return <div>
            <HeaderApp />
            <SearchBar/>
          
        </div>
    }
}

export default MainScreen;