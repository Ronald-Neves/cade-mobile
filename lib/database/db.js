import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('meubanco.db');

export default db;
