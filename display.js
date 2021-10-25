import React from "react";
import styles from "./DisplayScreenStyle.module.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";



const DisplayScreen = (props) => {

        //         let pics = localStorage.getItem("pictures");
        //        pics = JSON.parse(pics);
        //        console.log("pics din loc storage", pics);
        console.log("props", props.pictures.hits);

        let url = "https://pixabay.com/api/?key=16468181-135e63b9d62443ba3f4dd3c92&q=photograph&image_type=photo";

 
        function showFirstTen(arr) {
                let firstTen = [];
                for (let i = 0; i < 10; i++) {
                        firstTen.push(arr[i]);
                }
                console.log("first ten", firstTen);
                // setPermPict(firstTen);
                return firstTen;
        }
        async function getData() {
               
                const response = await axios.get(url);
                console.log("response", response);
                const data = await response.data;
                console.log("data", data);
                const pics = await data.hits;
                console.log("pics:", pics);
                let first = showFirstTen(pics);
                console.log("first", first);
                localStorage.setItem("permanentPics", JSON.stringify(first));
                
                
        }
     
     
        useEffect(
                () => {
                        async function getData() {
               
                                const response = await axios.get(url);
                                console.log("response", response);
                                const data = await response.data;
                                console.log("data", data);
                                const pics = await data.hits;
                                console.log("pics:", pics);
                                let first = showFirstTen(pics);
                                console.log("first", first);
                                localStorage.setItem("permanentPics", JSON.stringify(first));
                                
                                
                        };
                        getData();
            }    
        );
            
        let permanentPics = JSON.parse(localStorage.getItem("permanentPics"));
        console.log("permanentPics", permanentPics);
    
      
        return <div className={styles.gridContainer}>
         
     
                {
                        (props.pictures.hits === undefined || null) ? JSON.parse(localStorage.getItem("permanentPics")).map(item=><div className={styles.gridItem} key={item.id}>
               
                                <img src={item.largeImageURL} alt="" style={{width:"100%", height:"100%"}}/>
                                </div>) :
                        props.pictures.hits.map(item => <div className={styles.gridItem} key={item.id}>
               
                <img src={item.largeImageURL} alt="" style={{width:"100%", height:"100%"}}/>
                </div>)}   
           

        </div>
    
}
export default DisplayScreen;
