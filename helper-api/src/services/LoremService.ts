function genrateRandomNumber(min: number, max: number):number{
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

export class LoremService{
    getLorem = (
        size: number
    ) => {
        const db = ['Quis', 'autem', 'vel', 'eum', 'iure', 'reprehenderit', 'qui', 'in', 'ea', 'voluptate', 'velit', 'esse', 'quam', 'nihil', 'molestiae', 'consequatur'];
        let finalStr: string =  "";
        if(size >= 1){
            let max: number = db.length-1;
            finalStr = db[0];
            let rdmIndex: number = -1;
            for(let i = 1; i < size; i++){
                rdmIndex = genrateRandomNumber(0, max);
                finalStr = finalStr + " " + db[rdmIndex];
            }
        }else{
            finalStr = "[ERROR]: The size of the output should be at leats 1!"
        }
        return finalStr
    }
}