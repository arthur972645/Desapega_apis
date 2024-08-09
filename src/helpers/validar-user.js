export const validarUsuario = (request, response, next) => {
  const { nome, email, telefone, senha, confirmSenha } = request.body;
  if (!nome) {
    response.status(400).json({ message: "o nome é obrigatório" });
    return;
  }
  if (!senha) {
    response.status(400).json({ message: "a senha é obrigatório" });
    return;
  }
  if (!telefone) {
    response.status(400).json({ message: "o telefone é obrigatório" });
    return;
  }
  if (!email.includes("@")) {
    response.status(409).json({ message: "deve conter @ do email" });
    return;
  }
  if (senha !== confirmSenha) {
    response.status(400).json({ message: "A senha e confirmação de senha devem ser iguais" });
    return;
  }
  next()
};
export default validarUsuario;
