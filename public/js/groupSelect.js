alert("box box");

const optionBox = document.getElementById("optionBox");
 
for (let i = 0; i < pullThisAnimalArray.length; i++) {
    let newOption = document.createElement("option");
    newOption.innerHTML = pullThisAnimalArray[i].group;
    newOption.text = pullThisAnimalArray[i].group;
    optionBox.options.add(newOption);
  }

  