export const normalizeInputs = (value: string, type: string) => {
    if(!value) return "" 
    
    if(type === 'a' ){
        console.log(value.length);
        if(value.length <= 3){
            return value.replace(/(\d{1})(\d{2})/g,"$1.$2")
        }else if(value.length === 5){
            return value.replace(/(.\d{2})(\d+?)/,"$1");
        }else {
            return value
        }
    } 
}