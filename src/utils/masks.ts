export const normalizeInputs = (value: string, type: string) => {
    if(!value) return "" 
    
    if(type === 'm' ){
        console.log(value.length);
        if(value.length <= 3){
            return value.replace(/(\d{1})(\d{2})/g,"$1.$2");
        }else if(value.length === 5){
            return value.replace(/(.\d{2})(\d+?)/,"$1");
        }else {
            return value
        }
    } 

    if(type === 'kg'){
        if(value.length <= 4){
            return value.replace(/(\d{2})(\d{2})/g,"$1.$2");
        }else if(value.length === 6){
            return value.replace(/(.\d{2})(\d+?)/,"$1");
        }else {
            return value
        }
    }
}