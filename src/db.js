import { createPool } from 'mysql2/promise'

const pool = createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    port: 3306,
    database: 'tienda'
})

export { pool }