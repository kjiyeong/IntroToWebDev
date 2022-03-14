function parseScores(scoresString) {
   // TODO: Compete the function
   let inString = scoresString.split(' ');

   return inString;
}

function buildDistributionArray(scoresArray) {
   // TODO: Compete the function
   grades = [0,0,0,0,0];

   for(let i = 0; i < scoresArray.length; i++){
      if (parseInt(scoresArray[i]) >= 90){
         grades[0] ++;
      }
      else if (parseInt(scoresArray[i]) >= 80){
         grades[1] ++;
      }
      else if (parseInt(scoresArray[i]) >= 70){
         grades[2] ++;
      }
      else if (parseInt(scoresArray[i]) >= 60){
         grades[3] ++;
      }
      else{
         grades[4] ++;;
      }
   }
   return grades;
}


function setTableContent(userInput) {
   // TODO: Compete the function
   let table = document.getElementById("distributionTable");
   table.innerHTML = "";
   let scoresArray = parseScores(userInput);
   let disArray = buildDistributionArray(scoresArray);
   if (userInput.trim().length > 0) {
      let scoresRow = table.insertRow();
      let labelRow = table.insertRow();
      let valueRow = table.insertRow();
      let labelArray = ["A", "B", "C", "D", "F"];

      for (let i=0; i<disArray.length; i++) {
         let disCell = scoresRow.insertCell();
         let labelCell = labelRow.insertCell();
         let valueCell = valueRow.insertCell();
         let label = labelArray[i];
         let value = disArray[i];
         let height = value * 10;
         let disDiv = document.createElement("div");
         let labelDiv = document.createElement("div");
         let valueDiv = document.createElement("div");
         disDiv.style.setProperty("height", height + "px");
         disDiv.classList.add("bar" + i);
         disCell.appendChild(disDiv);
         labelDiv.textContent = label;
         labelCell.appendChild(labelDiv);
         valueDiv.textContent = value;
         valueCell.appendChild(valueDiv);
      }
   } else {
      let onlyRow = table.insertRow();
      let onlyCell = onlyRow.insertCell();
      let onlyDiv = document.createElement("div");
      onlyDiv.textContent = "No graph to display";
      onlyCell.appendChild(onlyDiv);
   }
}


// The argument can be changed for testing purposes
setTableContent("45 78 98 83 86 99 90 59");
