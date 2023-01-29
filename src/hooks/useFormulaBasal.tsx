export function useFormulaBasal(data: any): string {
    let intAge = parseInt(data.age);
    let intHeight = parseInt(data.height);
    let intWeight = parseInt(data.weight);
    let result = 0;
    if(data.gender === 'f'){
        result = 655 + (9.6 * intWeight) + (1.8 * intHeight) - (4.7 * intAge)
    }else if(data.gender === 'm'){
        result = 66 + (13.8 * intWeight) + (5 * intHeight) - (6.8 * intAge);
    }

    const formatedResult = Math.round(result);
    const stringResult = `${formatedResult} kcal`

    return stringResult;
}