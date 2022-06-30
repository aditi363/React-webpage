import Header from "../../components/banner/banner";
import "./HomePage.css";
import React, { useEffect, useState , Component }  from 'react'

//passing state from child to parent to child
export default function HomePage() {
  return (        
    <>
      <Header />
      <div className="home">
      <div class = "container">
    <div class = "row text-center">
      <p><b>I am Aditi Saini, holding Indian nationality and Hinduism religion, I can communicate in English, Hindi,  Punjabi and can understand a little bit Chinese. My hobbies are Drawing, coding, designing, dancing, cooking and exploring new places. I am a quick learner and I am always eager to learn new things. I do not had much experience in coding during my graduation. But currently in my post graduation I am learning many new skills. I am enthusiastic and loves to do my work with passion.</b></p>
    </div></div>
      </div>
    </>
  )
}


