import React, { useState } from 'react'
import './TourList.scss'
import Tour from '../Tour/Tour'
import {tourData} from '../tourData';

export default function TourList() {
 const [tours,setTours] = useState(tourData)
//  console.log(tourData);

function removeTour(id){
  const sortedTours = tours.filter((tour)=>tour.id !==id)
  setTours (sortedTours)
}

return <>
  <section className='tourList'>
{tours.map((tour)=> {
  return (
    <Tour key={tour.id} tour = {tour} removeTour={removeTour} />
  )
})}
  </section>
  
  </>
}
