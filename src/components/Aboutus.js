import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import React from "react";
class Aboutus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "John De",
      age: 30,
      location: "New York",
    };
  }
componentDidMount() {
    // This method is called after the component is mounted
    console.log("Aboutus component mounted");
    
  }
  render() {
    return (
      <div>
        <h1>About Us</h1>
        <p>We are a company dedicated to providing the best service.</p>
        <Profile />
        <ProfileClass />
      </div>
    );
  }
}

export default Aboutus;