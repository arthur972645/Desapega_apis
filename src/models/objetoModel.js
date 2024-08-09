import conn from "../config/conn.js";

const tableObjeto = /*sql*/ `
    CREATE TABLE IF NOT EXISTS objetos(
        objeto_id varchar(60) primary key,
        nome varchar (255) not null,
        peso varchar (255) not null,
        cor varchar (255) not null,
        descricao text,
        disponivel boolean,
        usuario_id varchar(60),
        created_at timestamp default current_timestamp,
        updated_at timestamp default current_timestamp on update current_timestamp,
        foreign key (usuario_id) references usuarios(usuario_id)
    )
`;
conn.query(tableObjeto, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Tabela [ objetos ] criada com sucesso 🤗🤗🤗🤗🤗");
});