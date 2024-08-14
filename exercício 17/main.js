//Lanna Kamilly
function updatePrice() {
    const input = document.getElementById('priceInput');
    const display = document.getElementById('priceDisplay');
    display.textContent = 'Preço: R$' + input.value;
}