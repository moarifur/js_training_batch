// Function: Unit of work (aka Block of code)
// Function in action

// f(x) = x^2

// function test(){}

/*
    - function: ()
    - object: {}
    - array: []
*/ 



// + sign is being used as: (i) addtional operator, (ii) concatination

// template literal
console.log('Go')
console.log(`Going...`)

console.log('Go sumTwoNumbers')
console.log(`Going... ${sumTwoNumbers}`)

// DRY: Don't Repeat Yourself
// Step 1
function sumTwoNumbers(){
    let x = 5
    const y = 10
    const sumTwoNumbers = x + y
    console.log('Sum:' + sumTwoNumbers)
}

// Step 2
// 20 + 30
function sumTwoNumbers(){
    let x = 20
    const y = 30
    const sumTwoNumbers = x + y
    console.log('Sum:' + sumTwoNumbers)
}

// Step 3
function sumTwoNumbers(x, y){
    const sum = x + y
    console.log('Sum:' + sum)
}

// Step 4
function sumTwoNumbers(x, y){
    console.log(`Sum: ${x+y}`)
}

// Step 5
function sumTwoNumbers(x, y){
    return `Sum: ${x+y}`
    // return x+y
}



// args
