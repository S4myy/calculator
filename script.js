function calc(preis, divider) {
    preis = preis / divider
    let preisEins = preis * 0.01;
    let preisZwei = preis * 0.0003 * 20;

    return preisEins + preisZwei;
}

function calculate() {
    const price = parseFloat(document.getElementById("price").value);
    const carType = document.getElementById("carType").value;
    let divider = 0;
    if (carType === "electric") {
        divider = 4;
    } else if (carType === "hybrid") {
        divider = 2;
    }
    console.log(divider)
    let result = calc(price, divider);

    document.getElementById("result").innerText = `Monatliche Rate:${result.toFixed(2)}`;
}
