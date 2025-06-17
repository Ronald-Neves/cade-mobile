import db from "./db";

// Função para cadastrar um novo usuário
export const cadastrarUsuario = (email, senha, onSuccess, onError) => {
  db.transaction(tx => {
    tx.executeSql(
      "INSERT INTO usuarios (email, senha) VALUES (?, ?);",
      [email, senha],
      (_, result) => {
        console.log("Usuário cadastrado:", result);
        onSuccess(result);
      },
      (_, error) => {
        console.error("Erro ao cadastrar usuário:", error);
        onError(error);
        return true; // interrompe a transação
      }
    );
  });
};

// Função para fazer login do usuário
export const loginUsuario = (email, senha, onSuccess, onError) => {
  db.transaction(tx => {
    tx.executeSql(
      "SELECT * FROM usuarios WHERE email = ? AND senha = ?;",
      [email, senha],
      (_, { rows }) => {
        if (rows.length > 0) {
          const user = rows.item(0);
          console.log("Login bem-sucedido:", user);
          onSuccess(user);
        } else {
          console.warn("Usuário não encontrado.");
          onError("Usuário ou senha inválidos.");
        }
      },
      (_, error) => {
        console.error("Erro ao fazer login:", error);
        onError(error);
        return true;
      }
    );
  });
};
