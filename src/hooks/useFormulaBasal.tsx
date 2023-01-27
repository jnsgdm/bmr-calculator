export function useFormulaBasal(data: any): number {
    let intAge = parseInt(data.age);
    let intHeight = parseInt(data.height);
    let intWeight = parseInt(data.weight);
    let test = intAge + intHeight + intWeight;

    return test
}