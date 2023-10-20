function calculateInterest() {
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const time = parseFloat(document.getElementById("time").value);

    const simpleInterest = (principal * rate * time) / 100;
    document.getElementById("result").textContent = simpleInterest.toFixed(2);
}
