window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   // TODO: Complete the function
   let convertButton = document.getElementById("convertButton");
   let cInput = document.getElementById("cInput");
   let fInput = document.getElementById("fInput");
   let image = document.getElementById("weatherImage");
   let errorDiv = document.getElementById("errorMessage");

   convertButton.addEventListener("click", function() {
      let fTemp;
      let cTemp;

      if (cInput.value == "") {
         fTemp = parseFloat(fInput.value);
         if (isNaN(fTemp)) {
            errorDiv.textContent = fInput.value + " is not a number"
         } else {
            errorDiv.textContent = "";
            cTemp = convertFtoC(fTemp);
            cInput.value = cTemp;
         }
      } else if (fInput.value == "") {
         cTemp = parseFloat(cInput.value)
         if (isNaN(cTemp)) {
            errorDiv.textContent = cInput.value + " is not a number"
         } else {
            errorDiv.textContent = "";
            fTemp = convertCtoF(cTemp);
            fInput.value = fTemp;
         }
      }

      if (fTemp < 32) {
         image.src = "cold.png";
      } else if (fTemp <= 50) {
         image.src = "cool.png";
      } else {
         image.src = "warm.png";
      }

   });

   cInput.addEventListener("input", function(){
      fInput.value = "";
   });

   fInput.addEventListener("input", function(){
      cInput.value = "";
   });
}

function convertCtoF(degreesCelsius) {
   // TODO: Complete the function
   return degreesCelsius * 9/5 + 32;
}

function convertFtoC(degreesFahrenheit) {
   // TODO: Complete the function
   return (degreesFahrenheit - 32) * 5/9;
}
