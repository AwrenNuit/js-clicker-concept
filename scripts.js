// START BASIC THING
const basicBtn = document.getElementById("basic-btn");
let basicCount = {
  incAmount: 1,
  quantity: 0,
  increment: () => {
    basicCount.quantity += basicCount.incAmount;
    document.getElementById("basic-count").innerHTML = basicCount.quantity;

    if (basicCount.quantity === 30) {
      document.getElementById("message").innerHTML = "A Thing happened!";
      basicCount.incAmount = 2;
      document.getElementById("basic-btn").innerHTML = "+2 Things";
    }

    if (basicCount.quantity === 100) {
      document.getElementById("message").innerHTML = "Another Thing happened!";
      basicCount.incAmount = 3;
      document.getElementById("basic-btn").innerHTML = "+3 Things";
    }

    if (basicCount.quantity === 199) {
      document.getElementById("message").innerHTML = "You are Thing!";
      basicCount.incAmount = 9999;
      document.getElementById("basic-btn").innerHTML = "+9999 Things";
    }
    renderMediumBtn();
  },
};

basicBtn.addEventListener("click", basicCount.increment);
// END BASIC THING

// START BIGGER THING
function renderMediumBtn() {
  if (basicCount.quantity === 100) {
    const newDiv = document.createElement("div");
    newDiv.id = "medium-div";
    document.body.appendChild(newDiv);
    const newMsg = document.createElement("div");
    newMsg.innerHTML =
      'You have <span id="medium-count">0</span> Bigger Things.';
    document.getElementById("medium-div").appendChild(newMsg);
    const newBtn = document.createElement("button");
    newBtn.id = "medium-btn";
    newBtn.className = "inc-btn";
    newBtn.addEventListener("click", mediumCount.increment);
    document.getElementById("medium-div").appendChild(newBtn).innerHTML =
      "+1 Bigger Thing";
  }
}
const mediumBtn = document.getElementById("medium-btn");
let mediumCount = {
  incAmount: 1,
  quantity: 0,
  increment: () => {
    mediumCount.quantity += mediumCount.incAmount;
    document.getElementById("medium-count").innerHTML = mediumCount.quantity;
  },
};
// END BIGGER THING
