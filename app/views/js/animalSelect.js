alert("select select");

// assign this variable to the animal array from the database
var animalArray = document.getElementsByName("pullThisAnimalArray");

// assigns this variable to the select box to be filled
var animalBox = document.getElementById("box");

// populates the selectbox w/ the animals from the array 
for(var animal in animalArray)
    {
        var newOption = document.createElement("option");
        newOption.innerHTML = animal;
        newOption.text = animal
        animalBox.options.add(newOption);
    }

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
            // replace animals[key].habitat, etc with ejs tag properties
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
