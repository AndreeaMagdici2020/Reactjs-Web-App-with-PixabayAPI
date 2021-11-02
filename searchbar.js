/* eslint-disable no-restricted-globals */
import React from "react";
import search from "./pics/search.png";
import styles from "./searchBarStyle.module.css";
import DropdownMenu from "./DropdownMenu.js";
import Carousel from "./../Carousel.js";
import Pagination from "../Pagination";


            


class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            searchedVal: "",
            pictures: [],
            category:"",
        }
        this.handleCathegoryChange = this.handleCathegoryChange.bind(this);
        this.changeCategory = this.changeCategory.bind(this);
    }

handleCathegoryChange(event){
    this.setState({ query: event.target.value });
    
    }
    

    changeCategory(item) {
        this.setState({ category: item.value.toLowerCase() });
}
    onChangeValue(event) {
        this.setState({ searchedVal: event.target.value });
        console.log("state", this.state.searchedVal)
        
    }
    

    getUrl() {
       let url = `https://pixabay.com/api/?key=***&q=${this.state.searchedVal}&image_type=${this.state.category}&per_page=30`;
        console.log("updated ur:", url);       
        let data = fetch(url).then(response => response.json()).then(data => { this.updatePictureState(data); });
        console.log("data", data);
       
    }
//console.log("data from fetch", data); this.setState({ pictures: data }); console.log("pictures in state:", this.state.pictures); 
    
    updatePictureState(data) {
        console.log("data from fetch", data);
        
        this.setState({ pictures: data }); console.log("pictures in state:", this.state.pictures);
        console.log("the state", this.state.pictures);
        localStorage.setItem("pictures", JSON.stringify(this.state.pictures.hits));
        
        
       
    }

 
    
    render() {

        

        return <div className={styles.container}>
            <div className={styles.searchZone}>
               
             
                    {/* <select className={styles.dropdown} id="select-opt" onChange={this.handleCathegoryChange}>
                            {options.map(item => <option className={styles.option} key={ item.id} value={ item.value.toLowerCase()}>{ item.value}</option>)}
                    </select> */}
              
                <DropdownMenu category={this.state.category} changeCategory={ this.changeCategory}/>
                    
                <input className={styles.searchInput} id="searchInp" type="search" placeholder="search an image" value={this.state.searchedVal} onChange={() => { this.setState({ searchedVal: event.target.value })} } ></input>
              
                <button className={styles.searchBtn} onClick={(event) => { console.log("state", this.state.searchedVal); this.getUrl(); event.preventDefault(); }}>
                    <img className={styles.magnifier} src={search} alt="magnifier"/>
                </button>
         
            </div>
            <Carousel />
            <Pagination  loadingPics={this.state.pictures} pictures={ JSON.parse(localStorage.getItem("pictures"))}/>
            {/* <DisplayScreen loadingPics={this.state.pictures} pictures={ JSON.parse(localStorage.getItem("pictures"))}/> */}
           
       </div>
   }
    
}  
      

    
        



export default SearchBar;
