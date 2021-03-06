import Database from 'better-sqlite3';
const db = new Database('database.db');
db.pragma('journal_mode = WAL');

db.prepare('CREATE TABLE IF NOT EXISTS users (userId INTEGER PRIMARY KEY, username TEXT, password TEXT);').run()
db.prepare('CREATE TABLE IF NOT EXISTS sessions (userId INTEGER, sessionId TEXT PRIMARY KEY, userAgent TEXT, lastUsed DATETIME);').run()
db.prepare('CREATE TABLE IF NOT EXISTS messages (userId INTEGER, message TEXT, isFile BOOL, timeStamp DATETIME);').run()


export {db as default}