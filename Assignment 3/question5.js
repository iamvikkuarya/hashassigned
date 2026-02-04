// Q5: Function to replace wrong word with correct word using string.replace

function correctfn(string, wrong, correct) {
    return string.replace(wrong, correct);
}

// Test cases
console.log("Function to replace wrong word with correct word:\n");

let sentence1 = "I love eating appel every day";
console.log("Original: " + sentence1);
console.log("Corrected: " + correctfn(sentence1, "appel", "apple"));
console.log();

let sentence2 = "JavaScript is a grate programming language";
console.log("Original: " + sentence2);
console.log("Corrected: " + correctfn(sentence2, "grate", "great"));
console.log();

let sentence3 = "The whether is nice today";
console.log("Original: " + sentence3);
console.log("Corrected: " + correctfn(sentence3, "whether", "weather"));
console.log();

let sentence4 = "I will go their tomorrow";
console.log("Original: " + sentence4);
console.log("Corrected: " + correctfn(sentence4, "their", "there"));
