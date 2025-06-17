import SQLite from 'react-native-sqlite-storage';

const database = SQLite.openDatabase( { name: 'database.db', location: 'default', }, () => {}, error => { console.error('Erro ao abrir o banco de dados:', error); });

export default database;