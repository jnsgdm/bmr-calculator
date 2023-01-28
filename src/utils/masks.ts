export const normalizeInputs = (value: string, type: string) => {
    if(!value) return "" 
    
    if(type === 'a' ){
        return value.replace(/[\D]/g,"").replace(/(\d{1})(\d{2})/,"$1.$2").replace(/(.\d{2]})(\d+?)/, "$1")
    }
}