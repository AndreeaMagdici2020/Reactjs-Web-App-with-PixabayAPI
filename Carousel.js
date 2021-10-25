import React from "react";
import phographer from "./main/pics/phographer.jpeg";
import phographer1 from "./main/pics/phographer1.jpg";
import photoprapher2 from "./main/pics/photoprapher2.jpg";
import previous from "./../components/main/pics/previous.png";
import next from "./../components/main/pics/next.png";
import styles from "./CarouselStyles.module.css";


let pictures = [{ id: 1, source: phographer, alt:"man with camera", caption:"Discover beautiful images" }, { id: 2, source: phographer1,alt:"woman with camera", caption:"Filtered searches" }, { id: 3, source: photoprapher2, alt:"girl with camera", caption:"Find anything you need" }];
class Carousel extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
           index:0,
            currentSlide:pictures[0],
        }
      
    }

    MoveToNext = () => {
        console.log(this.state.index);
        let current = this.state.index;
        console.log("current", current);
        let next = current + 1;
        console.log("next", next);
        if (next > pictures.length - 1) {
            next = pictures.length - 1;
        }
        let nextSlide = pictures[next];
        this.setState({ index: next, currentSlide:nextSlide});
        
    }
    
    MoveToPrevious = () => {
        console.log(this.state.index);
        let current = this.state.index;
        console.log("current", current);
        let previous = current - 1;
        console.log("next", previous);
        if (previous <0) {
            previous = 0;
        }
        let previousSlide = pictures[previous];
        this.setState({ index: previous, currentSlide:previousSlide});
        
      }
    render() {

    return <div className={styles.container}>
     
        <div className={styles.slide}>
            <img src={this.state.currentSlide.source} alt={this.state.currentSlide.alt} style={{ width: "100%", height: "350px" }} />
            <button style={{width:"50px", height:"70px", border:"none", borderRadius:"5px", position:"absolute", right:"0", marginTop:"150px", backgroundColor:"purple", opacity:"0.7"}} onClick={this.MoveToNext}><img src={next} style={{width:"100%"}} alt="next"/></button>
            <button style={{width:"50px", height:"70px", border:"none", borderRadius:"5px", position:"absolute", left:"0", marginTop:"150px", backgroundColor:"purple", opacity:"0.7"}} onClick={this.MoveToPrevious}><img src={previous} style={{width:"100%"}} alt="next"/></button>
            <div className={ styles.dots} style={{position:"absolute", marginBottom:"40px", marginLeft:"45%", marginTop:"10px", display:"flex", flexDirection:"row"}}>
                <div className={styles.dot} style={this.state.index===0?{opacity:"1"}:{opacity:"0.4"}}></div>
                <div className={styles.dot} style={this.state.index===1?{opacity:"1"}:{opacity:"0.4"}}></div>
                <div className={styles.dot} style={this.state.index===2?{opacity:"1"}:{opacity:"0.4"}}></div>
            </div>
        </div>

    </div>
}}

export default Carousel;