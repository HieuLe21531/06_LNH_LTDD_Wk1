let bills: number[] = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
function tipCalc2 (bill: number) : number {
    if ((bill >= 50) && (bill <= 300)) {
        return bill*0.15
    } else {
        return bill*0.2
    }
}
let tips: number[] = [];

for (let i = 0; i < bills.length; i++) {
    const tip = tipCalc2(bills[i]);
    tips.push(tip);
    total.push(bills[i] + tip);
}

function calcAverage(arr: number[]): number {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

const averageTotal = calcAverage(total);
