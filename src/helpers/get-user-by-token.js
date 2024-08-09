import jwt from "jsonwebtoken";
import conn from "../config/conn.js";
const getUserByToken = async (token) => {
  return new Promise((resolve, reject) => {
    if (!token) {
      response.status(401).json({ err: "Acesso negado" });
      return;
    }
    const decoded = jwt.verify(token, "SENHASUPERSEGURAEDIFICIL");
    //* console.log("função get user: ", decoded);

    const userID = decoded.id;
    // *console.log("userID: ",userID)
    const checkSQL = /*sql*/ `SELECT * FROM usuarios WHERE ?? = ?`;
    const checkData = ["usuario_id", userID];
    conn.query(checkSQL, checkData, (err, data) => {
      if (err) {
        reject({ status: 500, message: "Erro ao buscar usuario" });
      } else {
        resolve(data[0]);
      }
    });
  });
};

export default getUserByToken;
