// Define Global Variables
const countriesList = document.querySelector(".draggable-list");
const checkOrder = document.querySelector(".check-order");
let dragStartIndex;
let shuffledCountries;

// Array of larges countries in the correct order
const largestCountries = [
    "Russia",
    "Canada",
    "China",
    "United States",
    "Brazil",
    "Australia",
    "India",
    "Argentina",
    "Kazakhstan",
    "Algeria",
];

// Array to store items
const listItems = [];

// Start helper functions
function setAttributes(el, attrs) {
    for (let key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}

// End helper functions

// Start main functions
// Insert list items into ul
function createCountriesList() {
    // Create Unordered Countres Array
    shuffledCountries.map((country, index) => {
        // Create elements
        const listItem = document.createElement("li");
        const cNumber = document.createElement("span");
        const draggableEle = document.createElement("div");
        const cName = document.createElement("p");
        const icon = document.createElement("i");
        // Fill new elements
        setAttributes(listItem,{'data-index': index, 'class':"list-item"});
        cNumber.setAttribute("class", "country-number");
        cNumber.innerText = index + 1
        setAttributes(draggableEle, {'class':"draggble-item", 'draggable':"true"});
        cName.setAttribute("class", "country-name");
        cName.innerText = country;
        icon.setAttribute("class", "fas fa-grip-lines")
        // Append childs
        draggableEle.appendChild(cName);
        draggableEle.appendChild(icon);
        listItem.appendChild(cNumber);
        listItem.appendChild(draggableEle);
        countriesList.appendChild(listItem);
        // Push elements to new array
        listItems.push(listItem)
    });
}

// Sjuffle the list of countries
function shuffleTheList(){
    shuffledCountries= largestCountries.map(a => ({
        value: a, sort: Math.random()
    }))
    .sort((a,b)=> a.sort - b.sort)
    .map(a => a.value);

    createCountriesList()
}
shuffleTheList();

// End main functions