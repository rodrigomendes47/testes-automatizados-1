import { CPFService } from "../../../src/services/CPFService"

describe('Testes na classe CPFService', () => {
    let _service: CPFService;

    it ('Instanciando classe LoremService', () => {
        _service = new CPFService();
    })

    it ('Testando a função de verificação para um CPF válido', () => {
        //  Arrange
        const cpfToVerify = '111.222.333-44';
        const expectedResult = "CPF Válido!";
        //  Act
        const result = _service.verifyCPF(cpfToVerify);
        //Assert
        expect(result).toEqual(expectedResult);
        })

    it ('Testando a função de geração de CPF', () => {
        //  Arrange
        //  Act
        const result = _service.generateCPF();
        //Assert
        expect(_service.verifyCPF(result)).toEqual("CPF Válido!");
        // Usou-se a propria funcao de verificação de CPF da classe para certificar que o CPF gerado é um CPF valido
    })

    it ('O metodo verifyCPF deve verificar aceitar também CPFs sem marcacoes (. ou -)', () => {
        //  Arrange
        const cpfToVerify = '00122233344';
        const expectedResult = "CPF Válido!";
        //  Act
        const result = _service.verifyCPF(cpfToVerify);
        //Assert
        expect(result).toEqual(expectedResult);
    })
    

    it.each([
        {cpf:'', expectedResult:"CPF Inválido!"},
        {cpf:'11122233344', expectedResult:"CPF Válido!"},
        {cpf:'111.222.333-44', expectedResult:"CPF Válido!"},
        {cpf:'222.222.222-5', expectedResult:"CPF Inválido!"},
        {cpf:'abc.def.ghi-jk', expectedResult:"CPF Inválido!"},
        {cpf:'rodrigo', expectedResult:"CPF Inválido!"},
        {cpf:'005.444.001-52', expectedResult:"CPF Válido!"},
        {cpf:'arroba_eu@email.com', expectedResult:"CPF Inválido!"}
    ]) ('O metodo verifyCPF deve identificar quando um CPF e valido ou nao', ({cpf, expectedResult}) => {
        //  Arrange
        const cpfToVerify = cpf;
        const expectedVerification = expectedResult;
        //  Act
        const result = _service.verifyCPF(cpfToVerify);
        //Assert
        expect(result).toEqual(expectedVerification);
    })
    

    
    })
