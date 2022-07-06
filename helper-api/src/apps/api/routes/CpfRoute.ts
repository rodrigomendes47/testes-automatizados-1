import express from "express";
import { CpfController } from "../controllers/CpfController";

const router = express.Router();
const _controller = new CpfController();

router.get("/cpf", _controller.verifyCPF);
router.get("/cpf", _controller.getCPF);

export = router;
