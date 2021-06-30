const priceURL = `https://dcrdata.decred.org/api/exchangerate`;
const ticketURL = `https://explorer.dcrdata.org/api/stake/diff`;
let priceData;
let ticketData;

let price = document.getElementById("price");
let ticket = document.getElementById("ticket");

let priceMobile = document.getElementById("priceMobile");
let ticketMobile = document.getElementById("ticketMobile");

// const {dcrPrice} = priceData



const mostrarPrecio = (priceData, ticketData) => {
    const ticketUSD = ticketData["current"] * priceData["dcrPrice"]

    //Mobile
    const priceMobileString = `${priceData['dcrPrice'].toFixed(2)} USD`
    const ticketMobileString = `${ticketData["current"].toFixed(2)} DCR`

    //Desktop
    const priceString = `${priceData["dcrPrice"].toFixed(2)} USD (${priceData["exchanges"]['dcrdex']['price'].toFixed(6)} BTC)`
    const ticketString = `${ticketUSD.toFixed(2)} USD (${ticketData["current"].toFixed(2)} DCR)`

    price.innerHTML = priceString;
    ticket.innerHTML = ticketString;

    priceMobile.innerHTML = priceMobileString;
    ticketMobile.innerHTML = ticketMobileString;

}

const updateData = async () => {
    await fetch(priceURL)
        .then(res => res.json())
        .then(data => priceData = data)
        .then(() => console.log(priceData))

    await fetch(ticketURL)
        .then(res => res.json())
        .then(data => ticketData = data)
        .then(() => console.log(ticketData))

    mostrarPrecio(priceData, ticketData)
}

updateData()

