import React, { useState } from 'react';
import "./Tour.scss";


export default function Tour({ tour, removeTour , id}) {
const [showInfo,setShowInfo] = useState(false);
const [isVisible, setIsVisible] = useState(true);


const handleInfo =() => {
    setShowInfo(!showInfo)
}

const deleteTour =()=>{
    setIsVisible(removeTour)
}


    return <>

{isVisible && ( <article className='tour'>
            <div className='img-container'>

                <img src={tour.img} alt="" />

                <span className='close-btn' onClick={()=>{deleteTour (id)}}>
                    <i className='fas fa-window-close'></i>
                </span>
            </div>

            <div className='tour-info'>
                <h3>{tour.city}</h3>
                <h4>{tour.name}</h4>
                <h5>Info {" "}
                 <span onClick={handleInfo}><i className='fas fa-caret-square-down'></i> </span>

              
                
                </h5>

{showInfo && <p> {tour.info} </p>}

            </div>
        </article>)}
  
      
    </>


}
