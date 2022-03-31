let display = document.getElementById("calc-screen");
let temp = [];
let toggle = true;

function op(a, b) {
  if (toggle) {
    display.innerHTML += a;
    temp.push(b);
  } else {
    display.innerHTML = display.innerHTML.slice(0, -1);
    display.innerHTML += a;
    temp = temp.slice(0, -1);
    temp.push(b);
  }
  toggle = false;
}

function num(number) {
  toggle = true;
  temp.push(number);
  if (display.innerHTML === "0") {
    display.innerHTML = number;
  } else {
    display.innerHTML += number;
  }
}

function ac() {
  display.innerHTML = "0";
  temp = [];
}

function del() {
  if (display.innerHTML.length == 1) {
    display.innerHTML = "0";
    temp = [0];
  } else {
    display.innerHTML = display.innerHTML.slice(0, -1);
    temp = temp.slice(0, -1);
  }
}

function perc() {
  display.innerHTML += "%";
  temp.push("/100");
}

function calc() {
  display.innerHTML = eval(temp.join(""));
  temp = [eval(temp.join(""))];
}
