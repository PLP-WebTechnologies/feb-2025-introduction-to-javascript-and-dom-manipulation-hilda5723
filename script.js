// 🌸 Function to Increase Counter
function increaseCount() {
    let counter = document.getElementById("counter");
    counter.innerText = parseInt(counter.innerText) + 1;
}

// 🌸 Function to Decrease Counter
function decreaseCount() {
    let counter = document.getElementById("counter");
    if (parseInt(counter.innerText) > 0) {
        counter.innerText = parseInt(counter.innerText) - 1;
    }
}

// 🌸 Function to Generate a List Using Loops
function generateList() {
    let list = document.getElementById("list");
    list.innerHTML = ""; // Clear old list

    for (let i = 1; i <= 5; i++) {
        let listItem = document.createElement("li");
        listItem.innerText = "🌷 Item " + i;
        list.appendChild(listItem);
    }
}

// 🌸 Function to Show/Hide Box
function toggleBox() {
    let box = document.getElementById("box");
    box.style.display = (box.style.display === "none") ? "block" : "none";
}
