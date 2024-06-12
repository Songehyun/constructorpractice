const myhome = require("./constructor.js");

const formteg = (main) => {
  return `
  <!DOCTYPE html>
  <html lang-"ko">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width initial-scale=1.0">
      <title></title>
    </head>
    <body>
    ${main}
    </body>
  </html>
  `;
};

const homemy = new myhome(
  ["프링글스", "콜라", "젤리"],
  ["딥다이브책", "참새책", "볼펜", "필기노트"],
  ["컴퓨터", "책상", "의자"]
);

let study = homemy._study;
let food = homemy._food;
let furniture = homemy._furniture;

const myhomeany = (main) => {
  let a = "";
  main.forEach((index) => {
    a += content(index);
  });
  return a;
};

const content = (textNode) => {
  return `<p>${textNode}</p>`;
};

const myhomeadd = (discript, main) => {
  return `<h2>${discript}</h2>
  ${main}`;
};

const myhomeall = () => {
  return `
  ${myhomeadd("내 방에 있는 음식은", myhomeany(food))}
  ${myhomeadd("내 방에 있는 공부 관련 물품은", myhomeany(study))}
  ${myhomeadd("내 방에 있는 가구는", myhomeany(furniture))}
  `;
};

console.log(formteg(myhomeall()));
