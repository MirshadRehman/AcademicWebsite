import React from "react";
import "./NewsEvents.css";


function NewsEvent() {
  return (
    <div className="news-event-container">

    <div className="admission">

        <h2>Admission</h2>
        <ul>
          <li>Event 1 - Date</li>
          <li>Event 2 - Date</li>
          <li>Event 3 - Date</li>
          <li>Event 4 - Date</li>
        </ul>

    </div>

      {/* News Section */}
      <div className="news-section">
        <h2>News</h2>
        <div className="newsdisplay">

        <div className="newscard">
          <img src="academic.jpg" alt="news"/>
        </div>
        <div className="newscard">
        <img src="campus.jpeg" alt="news"/>
        </div>
        <div className="newscard">
        <img src="cultural.jpg" alt="news"/>
        </div>
        <div className="newscard">
        <img src="random1.jpg" alt="news"/>
        </div>
        <div className="newscard">
        <img src="random2.jpg" alt="news"/>
        </div>


        </div>
        
      </div>

      {/* Events Section */}
      <div className="events-section">
        <h2>Events</h2>
        <ul>
          <li>Event 1 - Date</li>
          <li>Event 2 - Date</li>
          <li>Event 3 - Date</li>
          <li>Event 4 - Date</li>
        </ul>
      </div>
    </div>
  );
}

export default NewsEvent;
