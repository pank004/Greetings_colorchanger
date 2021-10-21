//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
let currentHrs = new Date(2021, 1, 1, 18).getHours();
let message;
let styles = { color: "" };
if (currentHrs < 12) {
  message = "morning";
  styles.color = "red";
} else if (currentHrs < 18) {
  message = "afternoon";
  styles.color = "green";
} else {
  message = "evening";
  styles.color = "blue";
}
ReactDOM.render(
  <div className="heading">
    <h1 style={styles}>Good {message}</h1>
    <div>
      <img
        src="https://images.unsplash.com/photo-1634744632463-0da0f461fef7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        alt="pic"
      ></img>
    </div>
  </div>,
  document.getElementById("root")
);

//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
