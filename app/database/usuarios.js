// app/database/usuarios.js
import db from './db';

// Cadastra um novo usuário
export const cadastrarUsuario = (nome, email, senha) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)',
        [nome, email, senha],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};

// Autentica usuário com email e senha
export const autenticarUsuario = (email, senha) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM usuarios WHERE email = ? AND senha = ?',
        [email, senha],
        (_, { rows }) => {
          if (rows.length > 0) {
            resolve(rows.item(0)); // Retorna o primeiro usuário encontrado
          } else {
            reject('Usuário ou senha inválidos');
          }
        },
        (_, error) => reject(error)
      );
    });
  });
};
