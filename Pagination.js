import React from "react";
import { useState } from "react";
import DisplayScreen from "./main/display";
const Pagination = (props) => {
    const [loadingPages] = useState(Math.ceil(props.loadingPics.length / 10));
    const [savedPages] = useState(Math.ceil(props.pictures.length / 10));
    const [currentPage, setCurrentPage] = useState(1);

    console.log("loadinpages", loadingPages);
    console.log("savedpages", savedPages);
    console.log("props.loadingPics", props.loadingPics);
    console.log("props.pictures", props.pictures);

    function goToNextPage() {
        setCurrentPage((page) => page<savedPages?(page + 1):savedPages);
        console.log("current page", currentPage);
       
       
    };
    function goToPrevPage() {
        setCurrentPage((page) =>page>1?(page - 1):1 );
     };
    function changePage(even) {
        const pageNumber = Number(even.target.textContent);
        setCurrentPage(pageNumber);
    };
    const getPaginatedData = (data) => {
        let startIndex = currentPage * 10 - 10;
        let endIndex = startIndex + 10;
        return data.slice(startIndex, endIndex);
     };
   
     const getPaginationGroup = (pages) => {
         let pageGroup = [];
         if (pages > 0) {
            for (let i = 1; i <= pages; i++){
                pageGroup.push(i);
            }
            console.log("pageGroup", pageGroup);
         }
        
         return pageGroup;
     };
    return <div> 
        
        <div className="dataContainer" style={{width:"auto", height:"auto"}}>
            {props.loadingPics.length > 0 ?
                <DisplayScreen key={Math.random() * 1234} displayedPics={getPaginatedData(props.loadingPics)} /> :
                <DisplayScreen key={Math.random() * 1234} displayedPics={getPaginatedData(props.pictures)} />}
        </div>
        <div className="pagination" style={{ width: "auto", display: "flex", justifyContent: "center" }}>
            <button style={{borderStyle:"none",  width:"40px", height:"40px", margin:"5px", fontSize:"15px", fontFamily:"Roboto"}} onClick={goToPrevPage}>Prev</button>
            {loadingPages > 0 ? getPaginationGroup(loadingPages).map((item, index) => <button style={{margin:"5px", borderRadius:"50%", width:"40px", height:"40px", textAlign:"center"}} onClick={changePage}><span>{item}</span></button>) :
                getPaginationGroup(savedPages).map((item, index) => <button style={{margin:"5px", borderRadius:"50%", width:"40px", height:"40px", textAlign:"center"}} onClick={changePage}>{item}</button>)}
             <button style={{borderStyle:"none",  width:"40px", height:"40px", margin:"5px", fontSize:"15px", fontFamily:"Roboto"}} onClick={goToNextPage}>Next</button>
        </div>
    </div>
}

export default Pagination;