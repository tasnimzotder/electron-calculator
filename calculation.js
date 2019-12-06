let key = document.querySelectorAll(".key");
let dsp = document.querySelector(".dsp");
let dvsn = document.querySelector(".dvsn");
let mult = document.querySelector(".mult");
let subs = document.querySelector(".subs");
let addn = document.querySelector(".addn");
let point = document.querySelector(".point");
let result = Number(null);
let num = 0;
let operator = "";
let isPoint = Boolean(false);

function doOperate(e) {
  if (operator == "+") {
    result = result + e;
  } else if (operator == "-") {
    result = result - e;
  } else if (operator == "*") {
    result = result * e;
  } else if (operator == "/") {
    result = result / e;
  } else {
    result = num;
  }
}

function clearEm() {
  result = 0;
  num = 0;
  operator = "";
  isPoint = false;
  dsp.innerText = "|";
}

document.addEventListener("keydown", e => {
  if (e.keyCode == 27) {
    clearEm();
    dsp.innerHTML = result;
  }
});

document.querySelector(".clear").addEventListener("click", () => {
  clearEm();
});

for (let i = 0; i < key.length; i++) {
  key[i].addEventListener("click", () => {
    console.log(key[i].innerText);
    num = num * 10 + Number(key[i].innerText);
    dsp.innerText = num;
  });
}

dvsn.addEventListener("click", () => {
  doOperate(num);
  operator = dvsn.innerText;
  dsp.innerText = result;
  num = 0;
  console.log(operator);
});

mult.addEventListener("click", () => {
  doOperate(num);
  operator = mult.innerText;
  dsp.innerText = result;
  num = 0;
  console.log(operator);
});

subs.addEventListener("click", () => {
  doOperate(num);
  operator = subs.innerText;
  dsp.innerText = result;
  num = 0;
  console.log(operator);
});

addn.addEventListener("click", () => {
  doOperate(num);
  operator = addn.innerText;
  dsp.innerText = result;
  num = 0;
  console.log(operator);
});

point.addEventListener("click", () => {
  isPoint = true;
  console.log(isPoint);
});

// document.addEventListener("keydown", e => {
//   console.log(e.keyCode);
//   console.log(e.key);
// });
