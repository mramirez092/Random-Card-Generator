/* eslint-disable */
import "bootstrap";
import "./style.css";

const values = ["2", "3", "4", "5", "6", "7", "8", "9"];
const suits = ["♦", "♥", "♠", "♣"];

function selectRandomCard() {
  let valueIndex = Math.floor(Math.random() * values.length);
  let suitIndex = Math.floor(Math.random() * suits.length);
  let value = values[valueIndex];
  let suit = suits[suitIndex];
  return { value, suit };
}

onload = function hola() {
  //let elementValue = document.querySelector(".number");
  let elementSuit = document.querySelector(".span1");
  let elementSuit2 = document.querySelector(".span2");
  let card = selectRandomCard();
  numberr.textContent = card.value;
  elementSuit.textContent = card.suit;
  elementSuit2.textContent = card.suit;
};
