import React from "react";
import styles from "./main/HeaderApp.module.css";
import colage from "./main/pics/colage.png";
import heart from "./main/pics/heart.png";
import avatar from "./main/pics/avatar.png";
const HeaderApp = () => {
   
    return <div className={styles.headerApp}>
     
        <div className={styles.logoSpace}>
            <img className={styles.logo} src={colage} alt="pixabay logo" />
            <h3 className={styles.appHeader}>Pixabay Picture Finder</h3>
        </div>
        <div className={styles.userControls}>
            <img className={styles.like } src={heart} alt="heart button"/>
            <img className={ styles.user} src={avatar} alt="user button"/>
        </div>
    </div>
}

export default HeaderApp;