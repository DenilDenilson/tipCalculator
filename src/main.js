const inputBill = document.querySelector('#input-bill');
const inputPeople = document.querySelector('#input-people');
const inputBotons = document.querySelectorAll('.input-boton');
const tipAmount = document.querySelector('#tip-amount');
const totalPrice = document.querySelector('#total-price');
const reset = document.querySelector("#reset");

reset.addEventListener('click', () => {
  document.location.reload();
});

inputBill.addEventListener('change', () => {
  const Bill = inputBill.value;
  
  console.log(Bill);
  
  inputBotons.forEach((inputBoton) => {
    inputBoton.addEventListener('click', () => {
      const tip = inputBoton.value;
      console.log(tip);

      const peoples = inputPeople.value;
      console.log(peoples);

      tipAmountValue = (Bill*tip)/peoples;
      totalPriceValue = (Bill*tip)/peoples + parseFloat(Bill);

      tipAmount.innerHTML = `$${tipAmountValue}`;
      totalPrice.innerHTML = `$${totalPriceValue}`;
    });
  });
  

});


