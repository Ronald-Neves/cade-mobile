// Importa a instância do banco de dados
import db from './database';

// Função que cria as tabelas, caso ainda não existam
export const createTables = () => {
  // Inicia uma transação no banco (transações agrupam comandos SQL)
  db.transaction(tx => {
    // Executa o comando SQL para criar a tabela 'usuarios' se ela não existir
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,  -- ID único, autoincrementado
        nome TEXT,                              -- Nome do usuário (texto)
        email TEXT                              -- Email do usuário (texto)
      );`
    );
  });
};