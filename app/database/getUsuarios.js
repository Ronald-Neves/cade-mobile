// Importa o banco
import db from './database';

// Função que busca todos os usuários do banco
// Recebe uma função de callback que será chamada com os resultados
export const getUsuarios = (callback) => {
  // Inicia uma transação
  db.transaction(tx => {
    // Executa uma query de seleção
    tx.executeSql(
      'SELECT * FROM usuarios;', // Seleciona todos os registros

      [], // Sem parâmetros

      // Callback em caso de sucesso
      (_, { rows }) => {
        // rows._array contém os dados como array de objetos
        callback(rows._array); // Envia os dados para a função callback
      },

      // Callback em caso de erro
      (_, error) => {
        console.log('Erro ao buscar usuários:', error);
        return false;
      }
    );
  });
};