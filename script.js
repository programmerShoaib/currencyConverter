let BASE_URL = `https://2024-03-06.currency-api.pages.dev/v1/currencies`;

let dropdowns = document.querySelectorAll("#dropdowns select");
let btn = document.querySelector("form button");
let fromCurrency = document.querySelector("#from select");
let toCurrency = document.querySelector("#to select");
let result = document.querySelector("#result");

for (select of dropdowns) {
    for (currencyCode in countryList) {
        let option = document.createElement("option");
        option.value = currencyCode;
        option.innerHTML = countryList[currencyCode];
        if (select.name === "from" && currencyCode === "USD") {
            option.selected = "selected";
        } else if (select.name === "to" && currencyCode === "PKR") {
            option.selected = "selected";
        }
        select.appendChild(option);
    }

    select.addEventListener("change", (e) => {
        upDateFlags(e.target);
    });
}

const upDateFlags = (element) => {
    let currencyCode = element.value;
    let countryCode = countryList[currencyCode];
    let flagImg = `https://flagsapi.com/${countryCode}/flat/64.png`;
    element.parentElement.querySelector("img").src = flagImg;
}

btn.addEventListener("click", (e) => {
    e.preventDefault();
    updateExchangeRate();
});

const updateExchangeRate = async () => {
    let amount = document.querySelector("form input");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
      amtVal = 1;
      amount.value = "1";
    }
    const URL = `${BASE_URL}/${fromCurrency.value.toLowerCase()}/${toCurrency.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[toCurrency.value.toLowerCase()];
  
    let finalAmount = amtVal * rate;
    result.innerText = `${amtVal} ${fromCurrency.value} = ${finalAmount} ${toCurrency.value}`;
  };




    
    
