// Q4: Count vowels and consonants in a string (minimum 20 characters)

let string = "JavaScript is an amazing programming language";

console.log("String:");
console.log(string);
console.log(`Length: ${string.length} characters\n`);

let vowelCount = 0;
let consonantCount = 0;

const vowels = ['a', 'e', 'i', 'o', 'u'];

for (let char of string.toLowerCase()) {
    // Check if character is a letter
    if (char >= 'a' && char <= 'z') {
        if (vowels.includes(char)) {
            vowelCount++;
        } else {
            consonantCount++;
        }
    }
}

console.log("Results:");
console.log(`Vowels: ${vowelCount}`);
console.log(`Consonants: ${consonantCount}`);
console.log(`Total Letters: ${vowelCount + consonantCount}`);
