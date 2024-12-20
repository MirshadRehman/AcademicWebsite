import React from "react";
import './Home.css';
import NewsEvent from "./home_components/NewsEvents";
import Advertisement from "./home_components/Advertisement";
function Home() {
  return (
    <>
    <div className="page">
    <div style={{ padding: "20px" }}>
      <h2>Welcome to University of Education</h2>
      <p>
        Explore our programs, research, and community activities. Discover how
        we contribute to society and support our students.
      </p>
    </div>
    <NewsEvent/>
    
    </div>
    <Advertisement/>
    </>
  );
}

export default Home;
