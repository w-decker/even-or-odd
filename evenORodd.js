// function to calculate if something is EVEN or ODD
function evenORodd(){
    const inputBox = document.getElementById("input-box")
    const result = document.getElementById("answer")
    const num = parseInt(inputBox.value)

    if (num % 2 === 0){
        result.textContent = `${num} is even!`;
    }
    else {
        result.textContent = `${num} is odd!`;
    }

    if (typeof num != "number") {
        result.textContent = `Please type a number!`
    }
}

// allows user to also press ENTER key
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      evenORodd();
    }
  });