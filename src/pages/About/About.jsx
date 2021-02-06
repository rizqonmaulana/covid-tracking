import React from "react";
import { Link } from "react-router-dom";

class About extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <h1>Halaman About</h1>
      </div>
    );
  }
}

export default About;
