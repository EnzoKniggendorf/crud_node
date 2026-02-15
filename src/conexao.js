import mysql from 'mysql'

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '2302',
    database: 'crud_node'
})

conexao.connect()

export const consulta = (sql, valores='', mensagemReject) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, valores, (error, results) => {
            if(error) return reject(mensagemReject)
            const row = JSON.parse(JSON.stringify(results))
            return resolve(row)   
        })
    })
}

export default conexao