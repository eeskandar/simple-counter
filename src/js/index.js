//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import { Clock } from "./component/Clock.jsx";


//render your react application
let hours1st = 0;
let hours2nd = 0;
let minutes1st = 0;
let minutes2nd = 0;
let seconds1st = 0;
let seconds2nd = 0;

setInterval(()=>{
    seconds1st++
    if(seconds1st == 10){
        seconds1st = 0
        seconds2nd++
        if(seconds2nd == 6){
            seconds2nd = 0
            minutes1st++
            if(minutes1st == 10){
                minutes1st = 0
                minutes2nd++
                if(minutes2nd == 6){
                    minutes2nd = 0
                    hours1st++
                    if(hours1st == 10){
                        hours1st = 0
                        hours2nd++
                    }
                }
            }
        }
    }
    ReactDOM.render(<Clock hours2nd ={hours2nd} hours1st={hours1st} minutes2nd={minutes2nd} minutes1st={minutes1st} seconds2nd={seconds2nd} seconds1st={seconds1st}/>, document.querySelector("#app"));
}, 1000)

