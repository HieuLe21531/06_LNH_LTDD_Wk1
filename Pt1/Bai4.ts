let bill: number = 275
function tipCalc (bill: number) : number {
    if ((bill >= 50) && (bill <= 300)) {
        return bill*0.15
    } else {
        return bill*0.2
    }
}
let total = bill + tipCalc(bill)
console.log(`The bill is ${bill}, the tip is ${tipCalc(bill)} and total value is ${total} `)