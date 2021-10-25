import React from "react";
import { useState } from "react";
import styles from "./DropdownStyle.module.css";
import camera2 from "./pics/camera2.png";
import illustration2 from "./pics/illustration2.png";
import vector2 from "./pics/vector2.png";
import all from "./pics/all.png";


const DropdownMenu = (props) => {
    const [clicked, setClicked] = useState(false);
    let options = [{ id: 1, value: "Photo", selected: false, source:camera2 }, { id: 2, value: "Illustration", selected: false, source:illustration2 }, { id: 3, value: "Vector", selected: false, source:vector2 }, { id: 4, value: "All", selected: false, source:all }];
    const [selectedOption, setSelectedOption] = useState("");
    console.log("selectedOption", selectedOption);
    console.log("props.category:", props.category);
   
 
   

    return <div className={styles.container}>
        <button className={styles.searchBtn} onClick={() => { setClicked(!clicked);console.log("clicked", clicked)}}>
            
            {(props.category==="")?<span>Category</span>: options.map(item => (item.value.toLowerCase() === props.category) ? <><img className={styles.optionIcon} src={item.source} alt="" />{item.value}</>:"") }
          
        </button>
        
        {clicked===true? <div className={styles.optionList}>

            {options.map(item => <button className={styles.option} key={item.id} onClick={() => {
               
                setSelectedOption(item);
                props.changeCategory(item);
                setClicked(!clicked);
                //console.log("the selected category is:", props.category);
                
            }}>
                <img className={styles.optionIcon} src={item.source} alt="camere icon" />
                {item.value}
            </button>)}
       
       
   </div>:<span></span>}
       
    </div>
}

export default DropdownMenu;