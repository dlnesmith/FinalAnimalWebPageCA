alert("button button");

const animalForm = document.getElementById("form");
const finalButton = document.getElementById("formSubmit")

const submitButton = document.createElement("button");
console.log("button");
console.log(submitButton);
submitButton.innerHTML = "Submit";
submitButton.type = "submit";
//submitButton.onclick = addAnimal();

console.log("this is my form");
console.log(animalForm);
console.log("length: " + animalForm.elements.length);
console.log("item 1: " + animalForm.elements[0].value);
console.log("item 2: " + animalForm.elements[1].value);
console.log("item 3: " + animalForm.elements[2].value);
console.log("item 4: " + animalForm.elements[3].value);
console.log("item 5: " + animalForm.elements[4].value);
console.log("item 6: " + animalForm.elements[5].value);
console.log("item 7: " + animalForm.elements[6].value);

function addAnimal(){
    var xhttp = new XMLHttpRequest();
    const jsonData = {
        "id" : "new",
        "name" : animalForm.elements[0].value,
        "habitat" : animalForm.elements[1].value,
        "noise" : animalForm.elements[2].value,
        "group" : animalForm.elements[3].value
    }
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log("item 1: " + animalForm.elements[0].value);
        console.log("item 2: " + animalForm.elements[1].value);
        console.log("item 3: " + animalForm.elements[2].value);
        console.log("item 4: " + animalForm.elements[3].value);
        console.log("item 5: " + animalForm.elements[4].value);
        console.log("item 6: " + animalForm.elements[5].value);
        console.log("item 7: " + animalForm.elements[6].value);
        alert("button click submit");
        console.log("this.responseText");
        console.log(this.responseText);
        console.log("jsonData");
        console.log(jsonData);
      }
    };
    xhttp.open("POST", '/animal', true);
    xhttp.send(jsonData);
    
}

function editAnimal(){
    var xhttp = new XMLHttpRequest();
    const jsonData = {
        "name" : animalForm.elements[0].value,
        "habitat" : animalForm.elements[1].value,
        "noise" : animalForm.elements[2].value,
        "group" : animalForm.elements[3].value
    }
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        alert("button click edit");
        console.log("this.responseText");
        console.log(this.responseText);
        console.log("jsonData");
        console.log(jsonData);
      }
    };
    xhttp.open("PUT", '/animal', true);
    xhttp.send(jsonData);
    
}

function deleteAnimal(){
    var xhttp = new XMLHttpRequest();
    const jsonData = {
        "name" : animalForm.elements[0].value,
        "habitat" : animalForm.elements[1].value,
        "noise" : animalForm.elements[2].value,
        "group" : animalForm.elements[3].value
    }
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        alert("button click delete");
        console.log("this.responseText");
        console.log(this.responseText);
        console.log("jsonData");
        console.log(jsonData);
      }
    };
    xhttp.open("DELETE", '/animal', true);
    xhttp.send();
    
}