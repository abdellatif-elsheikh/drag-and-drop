// Define Global Variables
let dragStartIndex;
let shuffledCountries;
const listItems = [];
const countriesList = document.querySelector(".draggable-list");
const checkOrder = document.querySelector(".check-order");

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

/***
 *  ---------- Start helper functions ----------
***/

function setAttributes(el, attrs) {
    for (let key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}

// Swap elements in the dom
function swapItems(from, to){
    const itemOne = listItems[from].querySelector(".draggble-item");
    const itemTwo = listItems[to].querySelector(".draggble-item");

    listItems[from].appendChild(itemTwo);
    listItems[to].appendChild(itemOne);
    console.log(itemOne, itemTwo);
}

/***
 * ---------- End helper functions ----------
***/

/***
 * ---------- Start main functions ----------
***/
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
        setAttributes(listItem, { 'data-index': index, 'class': "list-item", 'draggable': "true" });
        cNumber.setAttribute("class", "country-number");
        cNumber.innerText = index + 1
        setAttributes(draggableEle, { 'class': "draggble-item", 'draggable': "true" });
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

    addEvenetLlistners()
}

// Sjuffle the list of countries
function shuffleTheList() {
    shuffledCountries = largestCountries.map(country => ({
        value: country, sort: Math.random()
    }))
        .sort((a, b) => a.sort - b.sort)
        .map(a => a.value);

    createCountriesList();
}
shuffleTheList();

/**
 * Start Draggable functions
**/

function dragStart(e) {
    console.log("dragstart", +this.closest("li").getAttribute("data-index"));
    dragStartIndex = Number(this.closest("li").getAttribute("data-index"))
}

function dragOver(e) {
    e.preventDefault()
}
function dragEnter() {
    this.classList.add("over")
}
function dragLeave() {
    this.classList.remove("over");
}
function dragDrop() {
    const dragEndIndex = Number(this.getAttribute("data-index"));
    this.classList.remove("over");
    swapItems(dragStartIndex,dragEndIndex)
    console.log(dragEndIndex);
}

/**
 * end draggable functions
**/

// Check of the correct order 
function checCorrectkOrder(e){
    listItems.forEach((item, index) => {
        const rightOrder = largestCountries[index];
        const currentOrder =  item.querySelector(".draggble-item").textContent;

        if(rightOrder === currentOrder){
            item.classList.add("right")
            item.classList.remove("wrong")
        }else{
            item.classList.add("wrong")
            item.classList.remove("right")
        }
    })
}


/***
 * ---------- End main functions ----------
***/

/***
 * ---------- add event listners ----------
***/

// Add events for drag to each item
function addEvenetLlistners() {
    const listItems = document.querySelectorAll(".list-item");
    const draggbleItems = document.querySelectorAll(".draggble-item");

    draggbleItems.forEach(item => {
        item.addEventListener("dragstart", dragStart)
        item.addEventListener("dragenter", dragEnter);
        item.addEventListener("dragleave", dragLeave);
    });
    
    listItems.forEach(listItem => {
        listItem.addEventListener("dragover", dragOver);
        listItem.addEventListener("drop", dragDrop);
    });
}

checkOrder.onclick = checCorrectkOrder