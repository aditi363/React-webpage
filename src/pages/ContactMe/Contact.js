import Header from "../../components/banner/banner";
import "./Contact.css";
import React, { useEffect, useState , Component }  from 'react'


//passing state from child to parent to child
export default function ContactMe() {
  return (        
    <>
      <Header />
      <div className="home">
        

      <form id="contact-form" method="POST">
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" />
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" aria-describedby="emailHelp" />
    </div>
    <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea className="form-control" rows="5"></textarea>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
   </form>
       </div>

    </>
  )
}









