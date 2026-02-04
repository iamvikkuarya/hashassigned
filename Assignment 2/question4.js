// Question 4: Sum of products of corresponding digits

function sumOfProducts(n1, n2) {
    // Convert numbers to strings to access individual digits
    let str1 = n1.toString();
    let str2 = n2.toString();
    
    // Pad the shorter string with leading zeros
    let maxLength = Math.max(str1.length, str2.length);
    str1 = str1.padStart(maxLength, '0');
    str2 = str2.padStart(maxLength, '0');
    
    let sum = 0;
    
    console.log(`Calculating for n1=${n1}, n2=${n2}`);
    
    // Calculate sum of products of corresponding digits
    for (let i = 0; i < maxLength; i++) {
        let digit1 = parseInt(str1[i]);
        let digit2 = parseInt(str2[i]);
        let product = digit1 * digit2;
        console.log(`Position ${i + 1}: ${digit1} × ${digit2} = ${product}`);
        sum += product;
    }
    
    console.log(`Total Sum: ${sum}`);
    console.log("---");
    
    return sum;
}

// Test cases
console.log("Sum of Products of Corresponding Digits:");
console.log("=========================================");

console.log("\nTest Case 1:");
sumOfProducts(6, 34);

console.log("\nTest Case 2:");
sumOfProducts(123, 456);

console.log("\nTest Case 3:");
sumOfProducts(99, 88);
