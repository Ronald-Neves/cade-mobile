// app/database/usuarios.js
import db from './db';

export const cadastrarUsuario = (nome, email, senha) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?);',
        [nome, email, senha],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};

export const buscarUsuarioPorEmailSenha = (email, senha) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM usuarios WHERE email = ? AND senha = ?;',
        [email, senha],
        (_, { rows }) => resolve(rows._array),
        (_, error) => reject(error)
      );
    });
  });
};
