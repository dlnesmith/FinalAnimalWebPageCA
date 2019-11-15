alert("hi by hi"); 

// assigns this variable to the select box to be filled
var animalBox = document.getElementById("box");

// populates the selectbox w/ the animals from the array 
  for (let i = 0; i < pullThisAnimalArray.length; i++) 
  {
    var newOption = document.createElement("option");
    newOption.innerHTML = pullThisAnimalArray[i].name;
    newOption.text = pullThisAnimalArray[i].name;
    animalBox.options.add(newOption);
  }

function getAnimalDescription()
{
    // assigns the option the user selects to this variable
    var selectedAnimal = document.getElementById("box").value;

    for (let i = 0; i < pullThisAnimalArray.length; i++) 
    {
      if (selectedAnimal == pullThisAnimalArray[i].name)
      {
        // replace animals[key].habitat, etc with ejs tag properties
        var animalHabitat = "Habitat: " + pullThisAnimalArray[i].habitat;
        var animalGroup = "Group: " + pullThisAnimalArray[i].group;
        var animalNoise = "Noise: " + pullThisAnimalArray[i].noise;

        var textnode = animalHabitat;
        document.getElementById("a").innerHTML = textnode;

        var textnode2 = animalGroup;
        document.getElementById("b").innerHTML= textnode2;

        var textnode3 = animalNoise;
        document.getElementById("c").innerHTML = textnode3;
      }
      
    }
    
  }