function numberToStringCPF(num){
    if(num < 10){
        return ("00" + String(num))
    }else if(num <100){
        return ("0" + String(num))
    }else{
        return(String(num))
    }
}

function numberToStringCPFFinal(num){
    if(num < 10){
        return ("0" + String(num))
    }else{
        return(String(num))
    }
}

class CpfService{
    generateCPF = () => {
        let firstSegment = Math.floor(Math.random() * 1000); 
        let secondSegment = Math.floor(Math.random() * 1000); 
        let thirdSegment = Math.floor(Math.random() * 1000); 
        let fourthSegment = Math.floor(Math.random() * 100); 
        return(numberToStringCPF(firstSegment) + "." +numberToStringCPF(secondSegment) + "." +numberToStringCPF(thirdSegment) + "-" +numberToStringCPFFinal(fourthSegment))
    }

    verifyCPF = (
        cpfToVerify
    ) => {
        let invalidCpfFlag = false;
        let cpfArray = cpfToVerify.split('-').join('.').split('.');
        let cpfFinal = cpfArray.pop();
        cpfArray.map(segment => {
            if(isNaN(+segment) || segment.length != 3){
                invalidCpfFlag = true;
            }
        })
        
        if(typeof(cpfFinal) !== "undefined" && (isNaN(+cpfFinal) || cpfFinal.length != 2)){
            invalidCpfFlag = true;
        }else if(typeof(cpfFinal) === "undefined"){
            invalidCpfFlag = true;

        }
        if(invalidCpfFlag){
            return "CPF Inválido!"
        }else{
            return "CPF Válido!"
        }
    }
}

let service = new CpfService();
console.log(service.generateCPF());
console.log(service.verifyCPF(service.generateCPF()))