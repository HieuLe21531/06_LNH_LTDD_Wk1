let Dolphins: {p1: number, p2: number, p3: number } = {
    p1: 96,
    p2: 108,
    p3: 89,
}

let Koalas: {p1: number, p2: number, p3: number } = {
    p1: 88,
    p2: 91,
    p3: 110,
}

let CalcAvG = (p1: number, p2: number, p3: number): number => {
    return (p1 + p2 + p3)/3
}

let Dolphins_AvgP = CalcAvG(Dolphins.p1, Dolphins.p2, Dolphins.p3)
let Koalas_AvgP = CalcAvG(Koalas.p1, Koalas.p2, Koalas.p3)

function MinimalP (Dolphins_AvgP: number, Koalas_AvgP: number): boolean {
    if (((Dolphins_AvgP >= 100) || (Koalas_AvgP >= 100))) {
        return true
    } else {
        return false
    }
}

function Comparation_B3 (Dolphins_AvgP: number, Koalas_AvgP: number, MinimalP: boolean): string {
    if ((Dolphins_AvgP>Koalas_AvgP) && (MinimalP == true) && (Dolphins_AvgP >= 2 * Koalas_AvgP)) {
        return `Dolphins Win`
    } else if ((Dolphins_AvgP < Koalas_AvgP) && (MinimalP == true ) && (Koalas_AvgP >= 2 * Dolphins_AvgP)) {
        return `Koalas Win`
    } else return 'No one wins'
}

console.log(`${Comparation_B3}`)