const btn = document.getElementById("basic-btn");
let incAmount = 1;
let basicCount = {
  quantity: 0,
  increment: () => {
    basicCount.quantity += incAmount;
    document.getElementById("basic-count").innerHTML = basicCount.quantity;

    if (basicCount.quantity === 30) {
      document.getElementById("message").innerHTML = "A Thing happened!";
      incAmount = 2;
      document.getElementById("basic-btn").innerHTML = "+2 Things";
    }

    if (basicCount.quantity === 100) {
      document.getElementById("message").innerHTML = "Another Thing happened!";
      incAmount = 3;
      document.getElementById("basic-btn").innerHTML = "+3 Things";
    }

    if (basicCount.quantity === 199) {
      document.getElementById("message").innerHTML = "You are Thing!";
      incAmount = 9999;
      document.getElementById("basic-btn").innerHTML = "+9999 Things";
    }
  },
};
btn.addEventListener("click", basicCount.increment);
