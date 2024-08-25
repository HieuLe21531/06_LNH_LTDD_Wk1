let bill: number[] = [125,555,44]
function tipCalc (bill: number) : number {
    if ((bill >= 50) && (bill <= 300)) {
        return bill*0.15
    } else {
        return bill*0.2
    }
}
const tip: number[] = bill.map(tipCalc);
let total : number[] = bill.map((bill, index) => bill + tip[index])
