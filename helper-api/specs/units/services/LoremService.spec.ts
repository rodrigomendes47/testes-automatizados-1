import { LoremService } from "../../../src/services/LoremService"

describe('Testes na classe LoremService', () => {
    let _service: LoremService;

    it ('Instanciando classe LoremService', () => {
        _service = new LoremService();
    })

    it ('Testing getLorem method, 10 words ins a string expected', () => {
        //  Arrange
        const size = 10;
        const expectedStrSize = size; //*
        
        //  Act
        const result = _service.getLorem(size);

        //Assert
        expect(result.split(" ").length).toEqual(expectedStrSize)
        // Since the method generates random phrases mixing words from a database, there is no exact result from the method.
        // Due to this feature, the number of words in the string was used to verify the method
    })

    it ('The method should return an error msg when size <= 0 ', () => { //ERROR expected
        //  Arrange
        const size = 0;
        const expectedResult = "[ERROR]: The size of the output should be at leats 1!";
        
        //  Act
        const result = _service.getLorem(size);

        //Assert
        expect(result).toEqual(expectedResult) // [UPDATE]: Bug fixed on service
    })    
})

