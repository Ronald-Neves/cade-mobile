// Importa o módulo expo-sqlite, que nos permite usar o banco de dados SQLite
import * as SQLite from 'expo-sqlite';

// Abre (ou cria, se não existir) o banco de dados chamado 'meubanco.db'
const db = SQLite.openDatabase('meubanco.db');

// Exporta o banco para que possamos usá-lo em outros arquivos
export default db;