const card1 = document.querySelector(".card__inner1");
const card2 = document.querySelector(".card__inner2");
const card3 = document.querySelector(".card__inner3");
const card4 = document.querySelector(".card__inner4");
const card5 = document.querySelector(".card__inner5");
const card6 = document.querySelector(".card__inner6");
const card7 = document.querySelector(".card__inner7");
const card8 = document.querySelector(".card__inner8");

card1.addEventListener("click", function (e) {
  card1.classList.toggle('is-flipped1');
});

card2.addEventListener("click", function (e) {
  card2.classList.toggle('is-flipped2');
});

card3.addEventListener("click", function (e) {
  card3.classList.toggle('is-flipped3');
});

card4.addEventListener("click", function (e) {
  card4.classList.toggle('is-flipped4');
});

card5.addEventListener("click", function (e) {
  card5.classList.toggle('is-flipped5');
});

card6.addEventListener("click", function (e) {
  card6.classList.toggle('is-flipped6');
});

card7.addEventListener("click", function (e) {
  card7.classList.toggle('is-flipped7');
});

card8.addEventListener("click", function (e) {
  card8.classList.toggle('is-flipped8');
});