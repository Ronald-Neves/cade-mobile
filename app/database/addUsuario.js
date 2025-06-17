// Importa o banco
import db from './database';

// Função para adicionar um novo usuário no banco
export const addUsuario = (nome, email) => {
  // Inicia uma transação
  db.transaction(tx => {
    // Executa uma query de inserção com parâmetros (os "?" serão substituídos)
    tx.executeSql(
      'INSERT INTO usuarios (nome, email) VALUES (?, ?);', // Query com placeholders
      [nome, email], // Valores a substituir nos placeholders

      // Callback em caso de sucesso
      (_, result) => {
        console.log('Usuário inserido com sucesso!', result);
      },

      // Callback em caso de erro
      (_, error) => {
        console.log('Erro ao inserir usuário:', error);
        return false; // Importante retornar false para indicar erro
      }
    );
  });
};