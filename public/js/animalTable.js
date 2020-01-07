alert("table table"); 

// assigns this variable to the select box to be filled
const animalTable = document.getElementById("table");

for (let i=0; i < pullThisAnimalArray.length; i++) {
    const row = animalTable.insertRow();

    animalTable.insertRow();

    let cell = row.insertCell();
    cell.innerHTML = pullThisAnimalArray[i].name;

    let cell2 = row.insertCell();
    cell2.innerHTML = pullThisAnimalArray[i].habitat;

    let cell3 = row.insertCell();
    cell3.innerHTML = pullThisAnimalArray[i].group;

    let cell4 = row.insertCell();
    cell4.innerHTML = pullThisAnimalArray[i].noise;

    animalTable.insertRow();
  
    // You can also attach a click listener if you want
    cell.addEventListener("click", function(){
        alert("FOO!");
    });
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