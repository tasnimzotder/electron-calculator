let key = document.querySelectorAll('.key');
let dsp = document.querySelector('.dsp');
// let dvsn = document.querySelector(".dvsn");
// let mult = document.querySelector(".mult");
// let subs = document.querySelector(".subs");
// let addn = document.querySelector(".addn");
let point = document.querySelector('.point');
let x1 = document.querySelectorAll('.x1');
let x2 = document.querySelectorAll('.x2');
let result = Number(null);
let num = 0;
let operator = '';
let isPoint = Boolean(false);

function doOperate(e) {
  if (operator == '+') {
    result = result + e;
  } else if (operator == '-') {
    result = result - e;
  } else if (operator == '*') {
    result = result * e;
  } else if (operator == '/') {
    result = result / e;
  } else {
    result = num;
  }
}

function keyDownStyle(ele, i) {
  ele[i].style.background = 'rgb(0, 160, 139)';
  setTimeout(() => {
    ele[i].style.background = '#d84343de';
  }, 400);
}
// keyDownStyle(0);

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
  operator = '';
  isPoint = false;
  dsp.innerText = '';
}

document.addEventListener('keydown', e => {
  if (e.keyCode == 27) {
    clearEm();
    // dsp.innerHTML = result;
  }

  if (e.keyCode == 13) {
    doOperate(num);
    dsp.innerText = result;
    num = 0;

    x1[14].style.background = 'blue';
    document.getElementById('clearP').innerText = '=';

    setTimeout(() => {
      x1[14].style.background = '';
      document.getElementById('clearP').innerText = 'C';
    }, 400);
  }

  if (e.key <= 9 && e.key >= 0) {
    num = num * 10 + Number(e.key);
    dsp.innerText = num;

    if (e.key >= 7 && e.key <= 9) {
      keyDownStyle(key, e.key - 7);
    }

    if (e.key >= 4 && e.key <= 6) {
      keyDownStyle(key, e.key - 1);
    }

    if (e.key >= 1 && e.key <= 3) {
      keyDownStyle(key, Number(e.key) + 5);
    }

    if (e.key == 0) {
      keyDownStyle(key, 9);
    }
  }

  console.log(e.key);

  if (
    e.key == '+' ||
    e.key == '-' ||
    e.key == '*' ||
    e.key == '/' ||
    e.key == '+'
  ) {
    doOperateKey(e);
  }

  if (e.key == '/') {
    keyDownStyle(x2, 0);
  }

  if (e.key == '*') {
    keyDownStyle(x2, 1);
  }

  if (e.key == '-') {
    keyDownStyle(x2, 2);
  }

  if (e.key == '+') {
    keyDownStyle(x2, 3);
  }

  if (e.keyCode == 27) {
    keyDownStyle(x1, 14);
  }
});

for (let i = 0; i < x2.length; i++) {
  x2[i].addEventListener('click', () => {
    if (
      x2[i].innerText == '+' ||
      x2[i].innerText == '-' ||
      x2[i].innerText == '*' ||
      x2[i].innerText == '/'
    ) {
      doOperateClick(x2[i]);
    }
  });
}

document.querySelector('.clear').addEventListener('click', () => {
  clearEm();
});

for (let i = 0; i < key.length; i++) {
  key[i].addEventListener('click', () => {
    console.log(key[i].innerText);
    num = num * 10 + Number(key[i].innerText);
    dsp.innerText = num;
  });
}

point.addEventListener('click', () => {
  isPoint = true;
  console.log(isPoint);
});

for (let i = 0; i < x1.length; i++) {
  x1[i].addEventListener('click', () => {
    x1[i].style.color = 'yellow';
    x1[i].style.fontWeight = 600;

    setTimeout(() => {
      x1[i].style.color = '';
      x1[i].style.fontWeight = 300;
    }, 400);
  });
}
