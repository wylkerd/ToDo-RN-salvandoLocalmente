import { db } from './SQLite'

export function criaTabela() {
  // Transação executando um callback que recebe uma transaction dentro
  db.transaction((transaction) => {
    // statement
    transaction.executeSql("CREATE TABLE IF NOT EXISTS " +
      "Notas " +
      "(id INTERGER PRIMARY KEY AUTOINCREMENT, titulo TEXT, categoria TEXT, text TEXT);"
    )
  })
}