import multer from "multer";
import path from "node:path";
import { stringify } from "node:querystring";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//*Função para falar aonde irei guardar as imagens
const imageStore = multer.diskStorage({
  destination: (request, file, cb) => {
    let folder = "";

    if (request.baseUrl.includes("usuarios")) {
      folder = "usuarios";
    } else if (request.baseUrl.includes("objetos")) {
      folder = "objetos";
    }
    cb(null, path.join(__dirname, `../public/${folder}`));
  },
  filename: (request, file, cb) => {
    cb(
      null,
      Date.now() +
        String(Math.floor(Math.random() * 1000)) +
        path.extname(file.originalname)
    );
  },
});

const imageUpload = multer({
  storage: imageStore,
  fileFilter(request, file, cb) {
    if (!file.originalname.match(/\.(png||jpg)$/)) {
      return cb(new Error("por favor, envie apenas jpg ou png"));
    }
    cb(null, true);
  },
});

export default imageUpload;
