import db from './db';

export const initDatabase = () => {
  db.transaction(tx => {
    // Tabela de usuários
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        senha TEXT NOT NULL
      );`
    );

    // Tabela de agendamentos
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS agendamentos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        usuario_id INTEGER,
        nome_servico TEXT,
        local TEXT,
        data TEXT,
        horario TEXT,
        orcamento TEXT,
        FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
      );`
    );

    // Se ainda quiser manter a tabela 'teste'
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS teste (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT);',
      [],
      () => console.log('Tabela "teste" criada com sucesso'),
      (_, error) => {
        console.log('Erro ao criar tabela "teste":', error);
        return true;
      }
    );
  });
};
