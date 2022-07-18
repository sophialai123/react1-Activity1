//this is a template folder for you to move into your src folder after you have created a boilerplate
import React from "react";

export class Dog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dog: 'https://www.dogfoodadvisor.com/wp-content/uploads/2019/08/golden-retriever-puppy-343x335.jpg',
      cat: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Cat_Janna.jpg/150px-Cat_Janna.jpg",
      animal: "dog"
    }
  }


  changeAnimal = () => {
    this.setState((prev) => {
      if (prev) {
        return {
          dog: prev.cat
        }
      }

    })
  }

  render() {
    return (
      <div>
        <img
          alt="dog"
          src={this.state.dog}
        ></img>
        <button onClick={this.changeAnimal}>I'm more of a {this.state.animal} person!</button>
      </div>
    );
  }
}
