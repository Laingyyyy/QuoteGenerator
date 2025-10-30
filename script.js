// const form = document.getElementById("moodForm");
// const inputMood = document.querySelector("#moodInput");
// const moodList = document.querySelector('#moodList');
//
//
// form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     const mood = inputMood.value;
//     if (mood === "") {
//         alert("Please enter a mood");
//         return;
//     }
//
//     const moodItem = document.createElement('p');
//     moodItem.innerText= mood;
//     moodList.appendChild(moodItem);
//     inputMood.value = "";
// })
//
// // document.getElementById('AddMoodBtn').addEventListener('click', AddMood);
//
//
// function AddMood() {
//     const anotherMood = prompt('Add another mood!');
//     const anotherItem = document.createElement('div');
//     anotherItem.textContent = anotherMood;
//     moodList.appendChild(anotherItem);
// }
const quote = document.querySelector("#fetchQuote");
const quoteContainer = document.querySelector("#quoteContainer");
const author = document.querySelector("#author");

function getQuote() {
    quoteContainer.textContent = "Loading...";

    fetch("https://dummyjson.com/quotes/random")
        .then(response => {
            return response.json();
        })
        .then(data => {
            quoteContainer.textContent = `${data.quote}`;
            author.textContent = `- ${data.author}`;
        })
        .catch(error => {
            console.error("Error fetching quote:", error);
            quoteContainer.textContent = "Error fetching quote.";
        })
}