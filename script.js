const fromOption = document.querySelectorAll(".from");
const toOption = document.querySelectorAll(".to");
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("#convert");

const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");

const msg = document.querySelector(".msg");

window.addEventListener("DOMContentLoaded", () => {
  updateAmount();
});


for (let select of dropdowns) {
  for (currencyCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currencyCode;
    newOption.value = currencyCode;

    if (select.name === "from" && currencyCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currencyCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}


const updateFlag = (element) => {
  let currencyCode = element.value;
  let countryCode = countryList[currencyCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};


btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateAmount();
});


const updateAmount = async () => {
  let accessAcc = document.querySelector(".amount-container input");
  let amountVal = accessAcc.value;

  if (amountVal === "" || amountVal < 1) {
    amountVal = 1;
    accessAcc.value = 1;
  }

  const from = fromCurr.value.toLowerCase();
  const to = toCurr.value.toLowerCase();

  const URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`;

  let response = await fetch(URL);
  let data = await response.json();

  let rate = data[from][to];
  let finalAmount = rate * amountVal;
  let convertAmount = `${amountVal} ${from.toUpperCase()} = ${finalAmount.toFixed(4)} ${to.toUpperCase()}`;

  msg.innerText = convertAmount;
  msg.classList.add("msg");
};
