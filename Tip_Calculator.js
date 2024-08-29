function calculateButton() {
    let bill = document.getElementById("billAmount").value;
    let pertip = document.getElementById("percentageTip").value;
    let tipamount = document.getElementById("tipAmount");
    let totalamount = document.getElementById("totalAmount");
    let errorMessage = document.getElementById("errorMessage");
    errorMessage.textContent = "";
    bill = parseFloat(bill);
    pertip = parseFloat(pertip);
    if (isNaN(bill) || isNaN(pertip) || bill < 0 || pertip < 0) {
        errorMessage.textContent = "Please enter valid values.";
    }


    let calculatedTip = (pertip / 100) * bill;
    let total = bill + calculatedTip;
    tipamount.value = calculatedTip.toFixed(2);
    totalamount.value = total.toFixed(2);
}