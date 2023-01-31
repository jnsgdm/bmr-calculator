export function useFormulaBasal(data: any): string {
    let intAge = parseInt(data.age);
    let intHeight = parseFloat(data.height)*100;
    let intWeight = parseFloat(data.weight);
    let result = 0;
    
    console.log(intHeight);

    if(data.gender === 'f'){
        result = 655 + (9.6 * intWeight) + (1.8 * intHeight) - (4.7 * intAge)
    }else if(data.gender === 'm'){
        result = 66 + (13.8 * intWeight) + (5 * intHeight) - (6.8 * intAge);
    }

    const formatedResult = Math.round(result);
    const stringResult = `${formatedResult} kcal`

    return stringResult;
}