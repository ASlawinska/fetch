import style from "./css/scss/index.scss";
document.getElementById("select").addEventListener("change",calc)

function calc(){
    let inputValue = document.getElementById("CCY").value

    if (inputValue <= 0) {
        document.getElementById("output").innerText = "wprowadzono zla liczbe"
    } else { 
        fetch(`https://api.nbp.pl/api/exchangerates/rates/c/${this.value}/?format=json`)
        .then((resp)=>resp.json())
        .then(function(data){ 
           document.getElementById("output").innerHTML = `po przeliczeniu kwota to: ${data.rates[0].ask * inputValue} PLN`
        })
    }
};
