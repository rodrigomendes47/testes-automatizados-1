import { Request, Response, NextFunction } from "express";
import { CPFService } from "../../../services/CPFService";

interface CpfRequest {
    cpfToVerify: string;
}

export class CpfController {
    #service: CPFService;

    constructor() {
        this.#service = new CPFService();
    }

    verifyCPF = (req: Request<CpfRequest>, res: Response, next: NextFunction) => {
        const { cpfToVerify } = req.query;

        return res.status(200).json({
            result: this.#service.verifyCPF(String(cpfToVerify)),
        });
    };

    getCPF = (req: Request<CpfRequest>, res: Response, next: NextFunction) => {
        return res.status(200).json({
            result: this.#service.generateCPF(),
        });
    };
}
