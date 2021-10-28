import React from "react";
import styles from "./DisplayScreenStyle.module.css";




const DisplayScreen = (props) => {
      
        console.log("props.displayedPics", props.displayedPics);

        return <div className={styles.gridContainer}>
         
{/*      
                {
                        (props.loadingPics.length === 0) ? props.pictures.map(item=><div className={styles.gridItem} key={item.id}>
               
                                <img src={item.largeImageURL} alt="" style={{width:"100%", height:"100%"}}/>
                                </div>) :
                        props.loadingPics.hits.map(item => <div className={styles.gridItem} key={item.id}>
               
                <img src={item.largeImageURL} alt="" style={{width:"100%", height:"100%"}}/>
                </div>)}    */}

                {props.displayedPics.map(item=><div className={styles.gridItem} key={item.id}>
               
               <img src={item.largeImageURL} alt="" style={{width:"100%", height:"100%"}}/>
               </div>)}

       

        </div>
    
}
export default DisplayScreen;
