let calculate = () => {
  let fuelprice = Number(document.getElementById("fuelprice").value);
  let consumption = Number(document.getElementById("consumption").value);
  let length = Number(document.getElementById("length").value);

  let fuelcost = fuelprice * consumption;
  let lengthInKm = length / 100;
  let calculation = fuelcost * lengthInKm;

  cost.innerHTML = calculation.toFixed(2) + " €";
};
