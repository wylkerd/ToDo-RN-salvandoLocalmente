import { db } from './SQLite'

export function criaTabela() {
  // Transação executando um callback que recebe uma transaction dentro
  db.transaction((transaction) => {
    // statement
    transaction.executeSql("CREATE TABLE IF NOT EXISTS " +
      "Notas " +
      "(id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT, categoria TEXT, text TEXT);"
    )
  })
}

// recebe um nota obj
// id é gerado automaticamente
// (?, ?, ?) segurança contra ataque SQL
export async function adicionaNota(nota) {
  return new Promise((resolve) => {
    db.transaction((transaction) => {
      transaction.executeSql("INSERT INTO Notas (titulo, categoria, texto) VALUES (?, ?, ?);", [nota.titulo, nota.categoria, nota.texto], () => {
        // função de callback, será realizada depois da nota ter sido adicionada
        resolve("Nota adicionada com sucesso!") // resolve finaliza a Promise e faz seguir o fluxo
      }) 
    })
  })
}

export async function buscaNotas() {
  return new Promise((resolve) => {
    db.transaction((transaction) => {
      transaction.executeSql("SELECT * FROM Notas;", [], (transaction, resultado) => {
        // função de callback, será realizada depois da nota ter sido adicionada
        resolve(resultado.rows._array) // resolve finaliza a Promise e faz seguir o fluxo
      }) 
    })
  })
}