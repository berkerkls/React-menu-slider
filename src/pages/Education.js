import React from 'react'
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
import "./Education.css"
import { Educationdata } from './Educationdata'

const Education = (props) => {
  
    const slideLeft = () => {
      var slider = document.getElementById("slider")
      console.log(slider)

      slider.scrollLeft = slider.scrollLeft - 500;
      
    }

    const slideRight = () => {
      var slider = document.getElementById("slider")

      slider.scrollLeft = slider.scrollLeft + 500;
    }


  return (
    <div className='education'>
      <div className='main-slider-component'>
          <AiOutlineLeft className='slider-icon left' size={40}  onClick={slideLeft} />
          <div id='slider'>
            {Educationdata.map((slide,index) => {
              return (
                <div className='slider-card' key={index}>
                  <div className='slider-card-image' style={{backgroundImage:`url(${slide.image})`}}></div>
                  <div className='card-title'>{slide.title}</div>
                  <div className='card-description'>{slide.desc}</div>

                </div>
              )
            })}
          </div>
          <AiOutlineRight className='slider-icon right' size={40} onClick={slideRight}/>
      </div>
    </div>      
  )
}

export default Education