async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const from = document.getElementById('fromCurrency');
    const to = document.getElementById('toCurrency');
    // error handling 
    if (amount === "" || isNaN(amount) || amount <= 0) {
        document.getElementById('result').textContent = 'Please enter a valid amount.';
        return;
    }
    try {
        const response = await fetch(`https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`)
        const data = await response.json()
        if (data.success) {
            const converted = data.result.toFixed(2)
            document.getElementById('result').textContent = `${amount} ${from} = ${convertedAmount} ${to}`
        } else {
            document.getElementById("result").textContent = "Conversion failed. Please try again.";

        }

    } catch (error) {
        document.getElementById("result").textContent = "Error fetching exchange rates.";
        console.error("error:", Error)
    }


}
