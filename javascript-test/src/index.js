import "./index.css";
import data from "../db/data.json";


// let dataArray = data.doctors;

//add row color based on availability
let button = document.querySelectorAll(".button");

button.forEach(element => {
    if (element.innerText === "MARK AS AVAILABLE") {
        element.parentElement.parentElement.classList.add('red');
    } else {
        element.classList.add('blue-btn');
        element.parentElement.parentElement.classList.add('blue');
    }
});

//changes row color based on the availability
button.forEach(element => {
    element.addEventListener('click', () => {
        if (element.parentElement.parentElement.classList.contains('red')) {
            element.parentElement.parentElement.classList.remove('red');
            element.parentElement.parentElement.classList.add('blue');
            element.classList.add('blue-btn');
            element.innerText = "MARK AS UNAVAILABLE";
        } else {
            element.parentElement.parentElement.classList.remove('blue');
            element.parentElement.parentElement.classList.add('red');
            element.classList.remove('blue-btn');
            element.innerText = "MARK AS AVAILABLE";
        }
    });
})


//filter available doctors
document.getElementById("availabilityFilterSelect").addEventListener("change", e => {
    var availability = e.target.value === "available" ? true : false;
    // let searched = data.doctors.filter(d => d.available === availability);
    // console.log(searched);

    let button = document.querySelectorAll(".button");

    //display based on the class added on the availability
    button.forEach(element => {
        if (availability == true && element.parentElement.parentElement.classList.contains('red')) {
            element.parentElement.parentElement.classList.add('display-off');
        } else {
            element.parentElement.parentElement.classList.remove('display-off');
        }
    });

});

//create input field
var input = document.createElement("input");
input.id = "input";
input.type = "text";
input.placeholder = "Name";
input.className = "input-box";
document.getElementById("searchContainer").appendChild(input);


// input field search
document.getElementById("input").addEventListener("keyup", () => {
    let inputVal = document.getElementById("input").value;
    let td = document.querySelectorAll("td");

    td.forEach(element => {

        let filter = [];
        filter.push(element.outerHTML)

        let nome = "<td>";
        nome += inputVal;
        nome += "</td>";

        let filterResult = filter.filter(item => item === nome);

        if ( element.innerText === inputVal ) {
            filterResult.forEach(e => {
                element.parentElement.classList.add('display-off');
            })
        } else {
            filterResult.forEach(e => {
                element.parentElement.classList.remove('display-on');
                element.parentElement.classList.add('display-off');
            })
        }
    })
})
