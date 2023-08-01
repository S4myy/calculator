function calc(preis, divider) {
    preis = preis / divider;
    let preisEins = preis * 0.01;
    let preisZwei = preis * 0.0003 * 20;

    return preisEins + preisZwei;
}

function calculate() {
    const priceInput = document.getElementById("price");
    const priceError = document.getElementById("priceError");
    const price = parseFloat(priceInput.value);
    
    if (isNaN(price) || price < 10000) {
        priceError.innerText = "Zahl Eingeben";
        priceInput.classList.add("error");
        priceInput.focus();
        return;
    } else {
        priceError.innerText = "";
        priceInput.classList.remove("error");
    }

    const carType = document.getElementById("carType").value;
    let divider = 0;
    if (carType === "electric") {
        divider = 4;
    } else if (carType === "hybrid") {
        divider = 2;
    }

    let result = calc(price, divider);
    document.getElementById("result").innerText = `Monatliche Rate: ${result.toFixed(2)}`;
}
