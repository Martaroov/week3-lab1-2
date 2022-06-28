// Iteration 1: Names and Input
let hacker1, hacker2;

hacker1 = "Marta";
hacker2 = "Andy";

console.log ("The driver's name is" + hacker1);
console.log ("The navigator's name is" + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log ("The navigator has the longest name, it has ${hacker2.length} characters");
} else if (hacker2.length > hacker1.length) {
  console.log ("The navigator has the longest name, it has ${hacker2.length} characters");
} else {
  console.log ("They both have equally long names");
}

// Iteration 3: Loops
let newName = "Sofia";

for (let i = 0; i < hacker1.length; i++) { 
    newName += '${hacker1 [i].toUpperCase()}';
  }

for (let i = hacker1.length -1; i>= 0; i--) { 
  newName += '${hacker1 [i]}';
}

console.log (newName);

const firstNameComesFirst = hacker1 < hacker2;

console.log (firstNameComesFirst);

if (firstNameComesFirst) {
  console.log ("The driver's name comes first")
} else {

}

// Bonus 1:

function countWords(str) {
  
  var count = 0;
  for (var i = 0; i <= str.length; i++) {
     if (str.charAt(i) == " ") {
          count ++;
      }
  }
  return count + 1;
  }
  console.log(countWords("I am a short sentence"));

//Bonus 2:
const phrase = "stackcats" ;
let isPalindrome = true;
for (let i= 0; i< phrase.length; i++) {
  if (phrase [i] !== phrase[phrase.length -1 -i])  {
    isPalindrome = false;
  
}
}