let key = document.querySelectorAll(".key");
let dsp = document.querySelector(".dsp");
// let dvsn = document.querySelector(".dvsn");
// let mult = document.querySelector(".mult");
// let subs = document.querySelector(".subs");
// let addn = document.querySelector(".addn");
let point = document.querySelector(".point");
let x1 = document.querySelectorAll(".x1");
let x2 = document.querySelectorAll(".x2");
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

function doOperateKey(e) {
  doOperate(num);
  operator = e.key;
  dsp.innerText = result;
  num = 0;
}

function doOperateClick(e) {
  doOperate(num);
  operator = e.innerText;
  dsp.innerText = result;
  num = 0;
  console.log(operator);
}

function clearEm() {
  result = 0;
  num = 0;
  operator = "";
  isPoint = false;
  dsp.innerText = "";
}

document.addEventListener("keydown", e => {
  if (e.keyCode == 27) {
    clearEm();
    // dsp.innerHTML = result;
  }

  if (e.keyCode == 13) {
    doOperate(num);
    dsp.innerText = result;
    num = 0;
  }

  if (e.key <= 9 || e.key >= 0) {
    num = num * 10 + Number(e.key);
    dsp.innerText = num;
  }

  // console.log(e.key);

  if (
    e.key == "+" ||
    e.key == "-" ||
    e.key == "*" ||
    e.key == "/" ||
    e.key == "+"
  ) {
    doOperateKey(e);
  }
});

for (let i = 0; i < x2.length; i++) {
  x2[i].addEventListener("click", () => {
    if (
      x2[i].innerText == "+" ||
      x2[i].innerText == "-" ||
      x2[i].innerText == "*" ||
      x2[i].innerText == "/"
    ) {
      doOperateClick(x2[i]);
    }
  });
}

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

// dvsn.addEventListener("click", () => {
//   doOperate(num);
//   operator = dvsn.innerText;
//   dsp.innerText = result;
//   num = 0;
//   console.log(operator);
// });

// mult.addEventListener("click", () => {
//   doOperate(num);
//   operator = mult.innerText;
//   dsp.innerText = result;
//   num = 0;
//   console.log(operator);
// });

// subs.addEventListener("click", () => {
//   doOperate(num);
//   operator = subs.innerText;
//   dsp.innerText = result;
//   num = 0;
//   console.log(operator);
// });

// addn.addEventListener("click", () => {
//   doOperate(num);
//   operator = addn.innerText;
//   dsp.innerText = result;
//   num = 0;
//   console.log(operator);
// });

point.addEventListener("click", () => {
  isPoint = true;
  console.log(isPoint);
});

// document.addEventListener("keydown", e => {
//   console.log(e.keyCode);
//   console.log(e.key);
// });

for (let i = 0; i < x1.length; i++) {
  x1[i].addEventListener("click", () => {
    x1[i].style.color = "yellow";
    x1[i].style.fontWeight = 600;

    setTimeout(() => {
      x1[i].style.color = "";
      x1[i].style.fontWeight = 300;
    }, 400);
  });
}
