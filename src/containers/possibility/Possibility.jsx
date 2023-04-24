import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
       <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
       <h1 className="gradient__text">
         Virtual Reality By OpenAI: The Future of Tomorrow
       </h1>
       <p>Virtual reality (VR) and augmented reality (AR) are rapidly evolving technologies that are transforming the way we interact with the digital world. As a language model, GPT-3 can provide insights into a wide range of VR/AR-related topics, including their applications, technologies, and potential impacts.</p>
      
      </div>
      </div>
  )
}

export default Possibility