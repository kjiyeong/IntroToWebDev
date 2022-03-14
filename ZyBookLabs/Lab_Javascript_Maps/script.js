function calcWordFrequencies() {
   let input = prompt("Enter words separated by a space");
   let wordList = input.split(" ");
   let wordCounts = {};

   for (let word of wordList) {
     wordCounts[word] = (word in wordCounts) ? (wordCounts[word] + 1) : 1;
   }

   for (let word in wordCounts) {
     console.log(`${word} ${wordCounts[word]}`);
   }
}
