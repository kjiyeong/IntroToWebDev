function drawTriangle(size) {

   // Your solution goes here
   var w;
   var h;
   var line;
   var width = 0;

   for(h = 0; h < size; h++) {
     line = "*";

     for (w = 0; w < width; w++) {
       line += "*";
     }
     console.log(line);

     width++;
   }
   }
