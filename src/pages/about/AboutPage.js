import Header from "../../components/banner/banner";
import "./AboutPage.css";
import React, { useEffect, useState , Component }  from 'react'


//passing state from child to parent to child
export default function AboutPage() {
  return (        
    <>
      <Header />
      <div className="home">
        <div class = "container">
    <div class = "row text-center">
    
      <h1> About Me </h1>
      <p>I am Aditi Saini, holding Indian nationality and Hinduism religion, I can communicate in English, Hindi,  Punjabi and can understand a little bit Chinese. My hobbies are Drawing, coding, designing, dancing, cooking and exploring new places. I am a quick learner and I am always eager to learn new things. I do not had much experience in coding during my graduation. But currently in my post graduation I am learning many new skills. I am enthusiastic and loves to do my work with passion.</p>
    </div>

    <div class = "row">
                <div class="col-lg-6">
                <h4>Education</h4>
                <ul>
                <li><h5>Mobile Application Development</h5></li>
                Georgian College, Barrie, Ontario
                <li><h5>Bachelor of Computer Applications</h5></li>
                Govt.P.G.College, Una, Himachal Pradesh, India.
                </ul>
              </div>
              <div class="col-lg-6">
                <h4>Experience</h4>
                <ul>
                <li><h5>Internship in Web Development</h5></li>
                Excellence Technology, Mohali, India
                </ul>
              </div>
    </div>  
  </div>

      </div>
    </>
  )
}









