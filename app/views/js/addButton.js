alert("button");

import serialize from 'form-serialize';

const animalForm = document.getElementById("form");
const finalButton = document.getElementById("formSubmit")
const submitButton = document.createElement("button");
submitButton.innerHTML = "Submit";
submitButton.type = "submit";
submitButton.onclick = loadXMLDoc();
document.body.appendChild(submitButton);

const formData = serialize(animalForm, { hash: true });
const json = JSON.stringify(formData);
console.log(json);


function loadXMLDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        alert("button click");
        console.log("success");
        console.log(this.responseText);
        document.getElementById("demo").innerHTML = this.responseText;
        const formData = serialize(animalForm, { hash: true });
        const json = JSON.stringify(formData);
        console.log(json);

      }
    };
    xhttp.open("GET", '/animal', true);
    xhttp.send();
}