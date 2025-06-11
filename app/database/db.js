// src/database/db.js
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('meuapp.db');

export default db;
