/*
    Github - version control
    - Cloud storage for storing code base
    - Hiroku: Hosting platform
    - Portfolio: code base
    - Team work: coding platform
    - Version control
*/ 
 
// DRY: Don't Repeat Yourself

//  ------- How to define a function in a nutShell -----------
// Step 1: convert any statement into a function
function sumTwoNumbers(){
    let x = 5
    const y = 10
    const sumTwoNumbers = x + y
    console.log('Sum:' + sumTwoNumbers)
}

// Step 2: Use parameter for taking input
function sumTwoNumbers(x, y){
    const sum = x + y
    console.log('Sum: ' + sum + ' from x = ' + x + ' and y = ' + y) 
}

// Step 3: Reduce unnecessary code block  
//         Use template literal
function sumTwoNumbers(x, y){
    console.log(`Sum: ${x+y} from x = ${x} and y = ${y}`)
}

// Step 4: Use return keyword
function sumTwoNumbers(x, y){
    return `Sum: ${x+y}`
    // return x+y
}

// injection: ${}

/*

Assignment: clacBasicArithmetic(x, y) - 
(i) addition, 
(ii) subtraction, 
(iii) multiplication, 
(iv) division

*/ 