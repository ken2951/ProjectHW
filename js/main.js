consoleText(["Hello, World!"], "text", ["#fffff"]);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ["#fffff"];
  let visible = true;
  let con = document.getElementById("console");
  let letterCount = 1;
  let x = 1;
  let waiting = false;
  let target = document.getElementById(id);
  target.setAttribute("style", "color:" + colors[0]);
  window.setInterval(function () {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount);
      window.setTimeout(function () {
        let usedColor = colors.shift();
        colors.push(usedColor);
        let usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute("style", "color:" + colors[0]);
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function () {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount);
      letterCount += x;
    }
  }, 120);
  window.setInterval(function () {
    if (visible === true) {
      con.className = "console-underscore hidden";
      visible = false;
    } else {
      con.className = "console-underscore";
      visible = true;
    }
  }, 400);
}

//scroll event
const $home = document.querySelector("#home");
const $works = document.querySelector("#works");
const $contact = document.querySelector("#contact");

$home.addEventListener("click", scrollToTop);
$works.addEventListener("click", scrollToWorks);
$contact.addEventListener("click", scrollToContact);

const scrollToTop = (event) => {
  window.scrollTo(200, 300);
};
const scrollToWorks = (event) => {};
const scrollToContact = (event) => {};