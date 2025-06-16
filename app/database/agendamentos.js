// app/database/agendamentos.js
import db from './db';

export const agendarServico = (usuarioId, nomeServico, local, data, horario, orcamento) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO agendamentos 
          (usuario_id, nome_servico, local, data, horario, orcamento)
          VALUES (?, ?, ?, ?, ?, ?);`,
        [usuarioId, nomeServico, local, data, horario, orcamento],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};

export const buscarAgendamentosPorUsuario = (usuarioId) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM agendamentos WHERE usuario_id = ?;`,
        [usuarioId],
        (_, { rows }) => resolve(rows._array),
        (_, error) => reject(error)
      );
    });
  });
};
