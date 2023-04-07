const leftSection = document.querySelector(".left-section");
const textInfo = document.querySelector(".text-info");
const nameHeader = document.querySelector(".name-header");
const filler = document.querySelector(".filler");
const clickInfo = document.querySelector("#click-something");

const heightCut = 40;

var textHalfWidth = 0;

const textValues = [
  "Holis",
  "Que clieackas cabron",
  "JasJas De loquisimos tron",
];

const valuesLength = textValues.length;

function getRandomInt() {
  return Math.floor(Math.random() * valuesLength);
}

const handleTextMovementOnClick = (event) => {
  clickInfo.textContent = textValues[getRandomInt()];
  textHalfWidth = Math.trunc(clickInfo.clientWidth / 2);
  clickInfo.style["top"] = event.clientY - heightCut + "px";
  clickInfo.style["left"] = event.clientX - textHalfWidth + "px";
  setTimeout((e) => {
    if (
      clickInfo.style["top"] === event.clientY - heightCut + "px" &&
      clickInfo.style["left"] === event.clientX - textHalfWidth + "px"
    ) {
      clickInfo.style["top"] = "-50px";
      clickInfo.style["left"] = "0px";
    }
  }, 1000);
};

const animationName = "name-animation 300ms ease-in 500ms";

nameHeader.addEventListener("click", (event) => {
  filler.style["animation"] = animationName;
  setTimeout((e) => {
    filler.style["animation"] = "";
  }, 1000);
});

leftSection.addEventListener("click", handleTextMovementOnClick);
textInfo.addEventListener("click", handleTextMovementOnClick);
