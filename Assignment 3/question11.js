// Q11: Calculate average for each student using array and object methods

const input = [
    {
        student1: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student2: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student3: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    }
];

console.log("Input:");
console.log(JSON.stringify(input, null, 2));
console.log("\n");

// Process each student object
const output = input.map(studentObj => {
    // Get the student key (student1, student2, etc.)
    const studentKey = Object.keys(studentObj)[0];
    const subjects = studentObj[studentKey];
    
    // Get all subject scores as an array
    const scores = Object.values(subjects);
    
    // Calculate average
    const sum = scores.reduce((acc, score) => acc + score, 0);
    const average = sum / scores.length;
    
    // Return new object with average
    return {
        [studentKey]: {
            average: average
        }
    };
});

console.log("Output:");
console.log(JSON.stringify(output, null, 2));

// Display in readable format
console.log("\nReadable Format:");
output.forEach(studentObj => {
    const studentKey = Object.keys(studentObj)[0];
    const average = studentObj[studentKey].average;
    console.log(`${studentKey}: ${average}`);
});
