// src/database/initDb.js
import db from './db';

export const initDatabase = () => {
  db.transaction(tx => {
    // Tabela de Usuários
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        senha TEXT NOT NULL
      );`
    );

    // Tabela de Agendamentos (antes chamada servicos)
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS agendamentos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        usuario_id INTEGER NOT NULL,
        servico TEXT NOT NULL,
        local TEXT,
        data TEXT,
        horario TEXT,
        orcamento TEXT,
        FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
      );`
    );
  }, error => {
    console.log("Erro ao iniciar DB:", error);
  }, () => {
    console.log("Banco de dados inicializado com sucesso!");
  });
};
