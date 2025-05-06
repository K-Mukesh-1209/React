import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "John Doe",
      age: 30,
      location: "New York",
    };
  }
async componentDidMount() {
    // This method is called after the component is mounted
    //console.log("ProfileClass component mounted");
    const data= await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&carousel=true&third_party_vendor=1");
    const json= await data.json();
    console.log(json);
  }
  render() {
    return (
      <div>
        <h1>Profile Class</h1>
        <p>Name: {this.state.name}</p>
        <p>Age: {this.state.age}</p>
        <p>Location: {this.state.location}</p>
      </div>
    );
  }
}
export default ProfileClass;