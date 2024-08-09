import { Router } from "express";

//*Importar Controllers de usuario
import {
  register,
  login,
  checkUser,
  getUserById,
  editUser,
} from "../controllers/usuariocontroller.js";

//*importar os helpers
import validarUsuario from "../helpers/validar-user.js";
import verifyToken from "../helpers/verify-token.js";
import imageUpload from "../helpers/image-upload.js";

const router = Router();

//*localhost:3333/usuarios/register
router.post("/register", validarUsuario, register);
router.post("/login", login);
router.get("/checkuser", checkUser);
router.get("/:id", getUserById);
//*verificar se está logado na aplicação e upload de imagem para perfil
router.put("/edit/:id", verifyToken, imageUpload.single("imagem"), editUser);

export default router;
