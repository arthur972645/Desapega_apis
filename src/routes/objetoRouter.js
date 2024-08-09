import { Router } from "express";
import { create } from "../controllers/objetoController.js";

//*helpers
import verifyToken from "../helpers/verify-token.js";
import imageUpload from "../helpers/image-upload.js";
import { getAllObjectUser } from "../controllers/objetoController.js";

const router = Router();
router.post("/create", verifyToken, create, imageUpload.array("imagens", 10), create);
//*listar todos os objetos
//*resgatar objetos pelo id
//*listar as imagens de um objeto
//*listar todas as imagens que pertencem a um usuario
router.get("usuarios/imagens", verifyToken, getAllObjectUser)

export default router;
