// src/database/db.js
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('meuapp.db');

export default db;
