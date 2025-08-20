function convertCurrency() {
  let usdAmount = document.getElementById("usd").value;
  usdAmount = Number(usdAmount);
  let exchangeRate = 25000;
  let vndAmount = usdAmount * exchangeRate;
  document.getElementById("result").innerText = `${usdAmount} USD = ${vndAmount.toLocaleString()} VND`;
}