import React, { useState } from "react";


const DogFunction = () => {
  const dogImage = 'https://www.dogfoodadvisor.com/wp-content/uploads/2019/08/golden-retriever-puppy-343x335.jpg';
  const catIamge = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Cat_Janna.jpg/150px-Cat_Janna.jpg";


  const [animal, setAnimal] = useState('dog');
  const [img, setImg] = useState(dogImage)

  const changeAnimal = () => {
    setAnimal((animal) => animal === "dog" ? "cat" : "dog")
    setImg((img) => img == dogImage ? catIamge : dogImage
    )
  }

  return (
    <div>
      <img
        alt="dog"
        src={img}
      ></img>
      <button onClick={changeAnimal}>I'm more of a {animal} person!</button>
    </div>
  );
}


export default DogFunction;