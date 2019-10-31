alert("hi by hi");

  // assigns this variable to the select box to be filled
  var animalBox = document.getElementById("box");
  
  // assigns the option the user selects to this variable
  var selectedAnimalOne = document.createElement("option");
  selectedAnimalOne.text = "aaaa";
  selectedAnimalOne.id = 1;
  animalBox.add(selectedAnimalOne);
  
  var selectedAnimalTwo = document.createElement("option");
  selectedAnimalOne.text = "a2";
  selectedAnimalTwo.id = 2;
  animalBox.add(selectedAnimalTwo);

  var selectedAnimalThree = document.createElement("option");
  selectedAnimalThree.text = "a3";
  selectedAnimalThree.id = 3;
  animalBox.add(selectedAnimalThree);

  var selectedAnimalFour = document.createElement("option");
  selectedAnimalFour.text = "a4";
  selectedAnimalFour.id = 4;
  animalBox.add(selectedAnimalFour);
  
  var selectedAnimalFive = document.createElement("option");
  selectedAnimalFive.text = "a5";
  selectedAnimalFive.id = 5;
  animalBox.add(selectedAnimalFive);

  var selectedAnimalSix = document.createElement("option");
  selectedAnimalSix.text = "a6";
  selectedAnimalSix.id = 6;
  animalBox.add(selectedAnimalSix);

  var selectedAnimalSeven = document.createElement("option");
  selectedAnimalSeven.text = "a7";
  selectedAnimalSeven.id = 7;
  animalBox.add(selectedAnimalSeven);

  var selectedAnimalEight = document.createElement("option");
  selectedAnimalEight.text = "a8";
  selectedAnimalEight.id = 8;
  animalBox.add(selectedAnimalEight);

  var selectedAnimalNine = document.createElement("option");
  selectedAnimalNine.text = "a9";
  selectedAnimalNine.id = 9;
  animalBox.add(selectedAnimalNine);

  var selectedAnimalTen = document.createElement("option");
  selectedAnimalTen.text = "a10";
  selectedAnimalTen.id = 10;
  animalBox.add(selectedAnimalTen);

    function getAnimalDescription(){
      // assigns the option the user selects to this variable
        var selectedAnimal = document.getElementById("box").value;

        var thisOne = selectedAnimal.options[0].text;

        for (Option in animalBox)
        {
            Option == <selectedAnimal></selectedAnimal>
            // fills in the description of the animal that the user selects in the select box
            if (selectedAnimal == animals[key].name)
            {
              var animalHabitat = "Habitat: " + animals[key].habitat;
              var animalGroup = "Group: " + animals[key].group;
              var animalNoise = "Noise: " + animals[key].noise;
  
              var textnode = animalHabitat;
              document.getElementById("a").innerHTML = textnode;
  
              var textnode2 = animalGroup;
              document.getElementById("b").innerHTML= textnode2;
  
              var textnode3 = animalNoise;
              document.getElementById("c").innerHTML = textnode3;
  
            }
        }
      
    }
