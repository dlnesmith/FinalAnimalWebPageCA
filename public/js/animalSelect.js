alert("select"); 

// assigns this variable to the select box to be filled
const animalBox = document.getElementById("box");

// populates the selectbox w/ the animals from the array 
  for (let i = 0; i < pullThisAnimalArray.length; i++) {
    let newOption = document.createElement("option");
    newOption.innerHTML = pullThisAnimalArray[i].name;
    newOption.text = pullThisAnimalArray[i].name;
    animalBox.options.add(newOption);
  }

function getAnimalDescription(){
    // assigns the option the user selects to this variable
    const selectedAnimal = document.getElementById("box").value;

    for (let i = 0; i < pullThisAnimalArray.length; i++) {
      if (selectedAnimal == pullThisAnimalArray[i].name){
        let animalHabitat = "Habitat: " + pullThisAnimalArray[i].habitat;
        let animalGroup = "Group: " + pullThisAnimalArray[i].group;
        let animalNoise = "Noise: " + pullThisAnimalArray[i].noise;

        const textnode = animalHabitat;
        document.getElementById("a").innerHTML = textnode;

        const textnode2 = animalGroup;
        document.getElementById("b").innerHTML= textnode2;

        const textnode3 = animalNoise;
        document.getElementById("c").innerHTML = textnode3;
      } 
    }
  }