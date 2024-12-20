import React from "react";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import "./Header.css";

function Header() {
  const [ showminiheader, setshowminiheader] = useState(false);
  useEffect(()=> {
    const handleScroll = () =>{
      if(window.scrollY>50)
      {
        setshowminiheader(true);
      }
      else{
        setshowminiheader(false);
      }
    };
    window.addEventListener("scroll",handleScroll);
    return()=> window.removeEventListener("scroll", handleScroll);
  },[]);

  return (
    <>
    <header style={{  padding: "10px" }}>
      <div className="box">
      <div className="box1">
        <img
            src="logo_sitm.jpg"
            alt="logo.jpg"
            />
            </div>
        <p>University of Education</p>

      </div>
      <nav>
        <Link to="/" style={{ color: "white", margin: "0 10px" }}>Home</Link>
        <Link to="/about" style={{ color: "white", margin: "0 10px" }}>About</Link>
        <Link to="/departments" style={{ color: "white", margin: "0 10px" }}>Departments</Link>
        <Link to="/contact" style={{ color: "white", margin: "0 10px" }}>Contact</Link>
      </nav>

      <div className="search">
      
        <input type="text" className="search_input" placeholder="Search..."/>
       
        <img src="search2.png" alt="search.png"/>
       
      </div>

    </header>

{showminiheader && (
  <div className="mini-header">
    <nav>
      <Link to="/" style={{ color: "white", margin: "0 10px", fontSize: "25px" }}>Home</Link>
      <Link to="/about" style={{ color: "white", margin: "0 10px", fontSize: "25px" }}>About</Link>
      <Link to="/departments" style={{ color: "white", margin: "0 10px", fontSize: "25px" }}>Departments</Link>
      <Link to="/contact" style={{ color: "white", margin: "0 10px", fontSize: "25px" }}>Contact</Link>
    </nav>
  </div>
)}
</>
  );
}

export default Header;
