import React, { Component } from 'react'
import img from './profile.jpg'

class App extends React.Component {
  state = {
    Person: {
      fullName: "mootez sighari",
      bio: "",
      imgSrc: img,
      profession: "montage video"
    },
    show: true
  };

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };

  render() {
    return (
      <>
            <button onClick={this.handleShowPerson}>click here</button>
        {this.state.show && (
          <>
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            <img src={this.state.Person.imgSrc} alt="Naruto"></img>
            <h1>{this.state.Person.profession}</h1>
            <br></br>
          </>
        )}

      </>
    );
  }
} 
export default App 