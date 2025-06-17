import * as SQLite from "expo-sqlite";

// Abrir ou criar o banco
const db = SQLite.openDatabase("meubanco.db");

// Exportar a referência
export default db;
