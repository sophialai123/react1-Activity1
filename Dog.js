//this is a template folder for you to move into your src folder after you have created a boilerplate
import React from "react";

export class Dog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img
          alt="dog"
          src="https://www.dogfoodadvisor.com/wp-content/uploads/2019/08/golden-retriever-puppy-343x335.jpg"
        ></img>
        <button>I'm more of a cat person!</button>
      </div>
    );
  }
}
