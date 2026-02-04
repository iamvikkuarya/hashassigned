// Q9: Count number of words in a paragraph

function countWords(paragraph) {
    // Trim whitespace and split by spaces
    // Filter out empty strings
    const words = paragraph.trim().split(/\s+/).filter(word => word.length > 0);
    return words.length;
}

// Test cases
console.log("Word Counter Function:\n");

let paragraph1 = "JavaScript is a versatile programming language used for web development.";
console.log("Paragraph 1:");
console.log(paragraph1);
console.log(`Word count: ${countWords(paragraph1)}\n`);

let paragraph2 = "The quick brown fox jumps over the lazy dog. This is a sample paragraph with multiple sentences.";
console.log("Paragraph 2:");
console.log(paragraph2);
console.log(`Word count: ${countWords(paragraph2)}\n`);

let paragraph3 = "Node.js allows JavaScript to run on the server side, making it a full-stack language.";
console.log("Paragraph 3:");
console.log(paragraph3);
console.log(`Word count: ${countWords(paragraph3)}`);
