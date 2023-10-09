const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
    //get random number between 0 to 3
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.innerHTML = colors[randomNumber];
})
let curr = -1;

function getRandomNumber() {
    let newr;
  
    do {
      newr = Math.floor(Math.random() * colors.length);
    } while (newr === curr);
    
    curr = newr; // Update curr to the new random number
    
    return newr;
}