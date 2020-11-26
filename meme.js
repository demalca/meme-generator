const form = document.querySelector("form");
const memeCollection = document.querySelector("#memes");
const letters = document.querySelector("h1");

addEventListener("submit", function (e) {
  e.preventDefault();

  //create meme image element
  const meme = document.createElement("img");

  //create containers
  const newDiv = document.createElement("div");
  const topDiv = document.createElement("div");
  const bottomDiv = document.createElement("div");
  const deleteDiv = document.createElement("div");

  //call meme inputs
  const image = document.querySelector("#image");
  const topInput = document.querySelector("#top");
  const bottomInput = document.querySelector("#bottom");

  //insert vaule to elements
  meme.src = image.value;
  topDiv.innerText = topInput.value;
  bottomDiv.innerText = bottomInput.value;
  deleteDiv.innerText = "x";

  //complete meme
  newDiv.append(meme);
  newDiv.append(topDiv);
  newDiv.append(bottomDiv);
  newDiv.append(deleteDiv);

  //add meme to collection;
  memeCollection.prepend(newDiv);
  form.reset();
});

//delete meme
addEventListener("click", function (e) {
  if (e.target.innerText === "X") {
    e.target.parentElement.remove();
  }
  console.log(e);
});

//h1 color shuffling
setInterval(function () {
  letters.style.color = randomRGB();
}, 2000);

function randomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
