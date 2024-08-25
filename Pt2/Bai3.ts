let Mark : {weight: number, height: number } = {
    weight: 78,
    height:1.69
};
let John : {weight: number, height: number } = {
    weight: 92,
    height: 1.95
};
function BMI(weight: number, height: number): number {
    return weight/height*height
}

let MarkBMI = BMI(Mark.weight, Mark.height)
let JohnBMI = BMI(John.weight, John.height)

function Comparation_B1_2(MarkBMI: number, JohnBMI: number): string {
    if (MarkBMI>JohnBMI) {
        return `Mark's BMI (${MarkBMI}) is higher than John's (${JohnBMI})!`
    } 
    else {
        return `John's BMI (${JohnBMI}) is higher than Mark's (${MarkBMI})!`
    }
}


console.log(`Mark's BMI is: ${MarkBMI}`)
console.log(`John's BMI is: ${JohnBMI}`)
console.log(`${Comparation_B1_2}`)